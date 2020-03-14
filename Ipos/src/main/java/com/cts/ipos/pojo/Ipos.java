package com.cts.ipos.pojo;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ipos")
public class Ipos {
	@Id
	Integer id;

	String companyName;
	 String stockExchange;
	 String pricePerShare;
	 int totalNoOfShares;
	 String remarks;

	String time;
	 String date;
	@Override
	public String toString() {
		return "Ipos [id=" + id + ", companyName=" + companyName + ", stockExchange=" + stockExchange
				+ ", pricePerShare=" + pricePerShare + ", totalNoOfShares=" + totalNoOfShares + ", remarks=" + remarks
				+ ", time=" + time + ", date=" + date + "]";
	}
	 public String getTime() {
		return time;
	}
	public String getDate() {
		return date;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getStockExchange() {
		return stockExchange;
	}
	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}
	public String getPricePerShare() {
		return pricePerShare;
	}
	public void setPricePerShare(String pricePerShare) {
		this.pricePerShare = pricePerShare;
	}
	public int getTotalNoOfShares() {
		return totalNoOfShares;
	}
	public void setTotalNoOfShares(int totalNoOfShares) {
		this.totalNoOfShares = totalNoOfShares;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	


}
