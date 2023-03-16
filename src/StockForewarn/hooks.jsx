import { useRequest } from '../../uitl/Service/useRequest';
import { getSupplyBySkuIds, purchaseListAdd, purchaseListEdit, warningSkuUrl } from './url';
import { useEffect, useState } from 'react';

const Reserve = (
  {
    sku = {},
    purchaseListList = [],
    onSuccess = () => {
    },
  },
) => {
  const purchaseNumber = sku.inventoryFloor - sku.number;
  const waitNumber = purchaseListList.length > 0;

  const [data, setData] = useState({
    number: purchaseNumber - sku.floatingCargoNumber > 0 ? purchaseNumber - sku.floatingCargoNumber : 1,
  });

  const [select, setSelect] = useState({});

  const [action, setAction] = useState(waitNumber ? null : 'add');
  const [edit, setEdit] = useState({});

  const [open, setOpen] = useState(false);


  const { data: supplyBrandsData = {}, run: getSupplyBrands } = useRequest(getSupplyBySkuIds, {}, {
    manual: true,
  });

  const supplyBrands = supplyBrandsData.data || [];

  const { loading: addLoading, run: add } = useRequest(purchaseListAdd, {}, {
    manual: true,
    onSuccess(res) {
      if (res.errCode === 1001) {
        setOpen(res.message);
      } else {
        onSuccess();
      }
    },
  });

  const { loading: editLoading, run: editRun } = useRequest(purchaseListEdit, {}, {
    manual: true,
    onSuccess,
  });

  const supplys = [];
  supplyBrands.forEach(item => {
    const res = data.brandId ? item.brandId === data.brandId : true;
    if (res && !supplys.find(supplysItem => supplysItem.customerId === item.customerId)) {
      supplys.push(item);
    }
  });
  const brands = [];
  supplyBrands.forEach(item => {
    const res = data.customerId ? item.customerId === data.customerId : true;
    if (res && !brands.find(brandItem => brandItem.brandId === item.brandId)) {
      brands.push(item);
    }
  });

  const selectBrandId = (brandId) => {
    const supplys = supplyBrands.filter(item => item.brandId === brandId);
    setData({ ...data, brandId, customerId: supplys.length === 1 ? supplys[0].customerId : data.customerId });
    setSelect({ ...select, customer: supplys.length === 1 ? true : select.customer });
  };

  const openBrand = () => {
    const supplys = supplyBrands.filter(item => (brands.length === 1 ? item.brandId === brands[0].brandId : true));
    setData({
      ...data,
      brandId: brands.length === 1 ? brands[0].brandId : null,
      customerId: (brands.length === 1 && supplys.length === 1) ? supplys[0].customerId : data.customerId,
    });
    setSelect({
      ...select,
      brand: true,
      customer: (brands.length === 1 && supplys.length === 1) ? true : select.customer,
    });
  };

  const selectCustomerId = (customerId) => {
    const brands = supplyBrands.filter(item => item.customerId === customerId);
    setData({
      ...data,
      customerId,
      brandId: brands.length === 1 ? brands[0].brandId : data.brandId,
    });
    setSelect({ ...select, brand: brands.length === 1 ? true : select.brand });
  };

  const openCustomer = () => {
    const brands = supplyBrands.filter(item => (supplys.length === 1 ? item.customerId === supplys[0].customerId : true));
    setData({
      ...data,
      customerId: supplys.length === 1 ? supplys[0].customerId : null,
      brandId: (supplys.length === 1 && brands.length === 1) ? brands[0].brandId : data.brandId,
    });
    setSelect({
      ...select,
      customer: true,
      brand: (supplys.length === 1 && brands.length === 1) ? true : select.brand,
    });
  };

  const addPickPurchase = () => {
    add({
      data: { ...data, skuId: sku.skuId, checked: true },
    });
  };

  const startReserve = () => {
    if (action === 'add') {
      add({
        data: { ...data, skuId: sku.skuId, checked: false },
      });
    } else {
      editRun({
        data: { ...edit, ...data, checked: false },
      });
    }
  };

  useEffect(() => {
    getSupplyBrands({
      data: { skuId: sku.skuId },
    });
  }, []);

  return {
    supplys,
    brands,
    select,
    edit,
    selectBrandId,
    openBrand,
    action,
    selectCustomerId,
    openCustomer,
    addPickPurchase,
    addLoading,
    editLoading,
    open,
    setOpen,
    setAction,
    startReserve,
    setEdit,
    waitNumber,
    data,
    setData,
    purchaseNumber,
  };
};

const warningSkus = (service, params) => {
  return useRequest(warningSkuUrl, service, params);
};

export const UseStockForewarn = {
  Reserve,
  warningSkus,
};
