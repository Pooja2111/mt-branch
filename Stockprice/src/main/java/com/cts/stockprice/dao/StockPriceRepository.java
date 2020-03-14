package com.cts.stockprice.dao;



import org.springframework.data.repository.CrudRepository;

import com.cts.stockprice.pojo.stockprice;

public interface StockPriceRepository  extends CrudRepository<stockprice, String> {


}
