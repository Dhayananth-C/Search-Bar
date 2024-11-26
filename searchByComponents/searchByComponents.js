import { LightningElement } from 'lwc';
import getContracts from '@salesforce/apex/BuildingClass.searchRecordByTenant';
export default class SearchByComponents extends LightningElement {

TenantName;
BuildingName;
Records;

columnsList=[
    {label :"Id",fieldName : "Id"},
    {label : "	ContractNumber" ,fieldName : "ContractNumber"},
    {label : "Building Name" ,fieldName : "Building__c"},
    {label : "Flat" , fieldName : "Flat__c"},
    {label : "Tenant" , fieldName : "Tenant__c"}
]
    handleTenantSearch(event){
        this.TenantName=event.target.value;
    }
    handleBuildingSearch(event){
        this.BuildingName = event.target.value;
    }
    handleSearch(){

        getContracts({BuildingName : this.BuildingName,ContactName : this.TenantName})
        .then(response=>{
            this.Records=response;
            console.log(response);
            console.log('INSIDE DATA')
        })
        .catch(error=>{
            console.log(error);
            alert(error);
        })
    }
}