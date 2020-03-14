package com.cts.stockprice.pojo;

import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="stockprice")
public class stockprice {
	
	
	
	String companyCode;
	@Id
	String stockExchange;
	Integer currentPrice;
	 String date;
	 String time;
	
	String uploadfile;
	
	@Override
	public String toString() {
		return "stockprice [companyCode=" + companyCode + ", stockExchange="
				+ stockExchange + ", currentPrice=" + currentPrice + ", date=" + date + ", time=" + time
				+ ", uploadfile=" + uploadfile + "]";
	}
	 public String getUploadfile() {
			return uploadfile;
		}
		public void setUploadfile(String uploadFile) {
			this.uploadfile = uploadFile;
		}

		 public String getDate() {
			return date;
		}
		public void setDate(String date) {
			this.date = date;
		}
		public String getTime() {
			return time;
		}
		public void setTime(String time) {
			this.time = time;
		}
		
		
	public String getCompanyCode() {
		return companyCode;
	}
	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}
	public String getStockExchange() {
		return stockExchange;
	}
	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}
	public Integer getCurrentPrice() {
		return currentPrice;
	}
	public void setCurrentPrice(Integer currentPrice) {
		this.currentPrice = currentPrice;
	}
	
	
	
}
