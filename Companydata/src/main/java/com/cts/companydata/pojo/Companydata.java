package com.cts.companydata.pojo;


import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;


@Entity
@Table(name="companydata")
public class Companydata {
	
	
	@Id

	String companyName;
Integer turnOver;
String ceo;
String boardOfDirectors;
Integer listInStock;
String sector;
String briefWriteup;
String stockCode;

@Transient

  List<Ipos> ipolist;

  

public List<Ipos> getIpolist() {
	return ipolist;
}
public void setIpolist(List<Ipos> ipolist) {
	this.ipolist = ipolist;
}
@Override
public String toString() {
	return "CompanyData [companyName=" + companyName + ", turnOver=" + turnOver + ", ceo=" + ceo + ", boardOfDirectors="
			+ boardOfDirectors + ", listInStock=" + listInStock + ", sector=" + sector + ", briefWriteup=" + briefWriteup
			+ ", stockCode=" + stockCode + "]";
}

public String getCompanyName() {
	return companyName;
}
public void setCompanyName(String companyName) {
	this.companyName = companyName;
}
public Integer getTurnOver() {
	return turnOver;
}
public void setTurnOver(Integer turnOver) {
	this.turnOver = turnOver;
}
public String getCeo() {
	return ceo;
}
public void setCeo(String ceo) {
	this.ceo = ceo;
}
public String getBoardOfDirectors() {
	return boardOfDirectors;
}
public void setBoardOfDirectors(String boardOfDirectors) {
	this.boardOfDirectors = boardOfDirectors;
}
public Integer getListInStock() {
	return listInStock;
}
public void setListInStock(Integer listInStock) {
	this.listInStock = listInStock;
}
public String getSector() {
	return sector;
}
public void setSector(String sector) {
	this.sector = sector;
}
public String getBriefWriteup() {
	return briefWriteup;
}
public void setBriefWriteup(String briefWriteup) {
	this.briefWriteup = briefWriteup;
}
public String getStockCode() {
	return stockCode;
}
public void setStockCode(String stockCode) {
	this.stockCode = stockCode;
}

}
