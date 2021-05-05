public with sharing class getContactsList {

    @AuraEnabled(cacheable=true)
    public static List<Contact> returnListOfContact(String searchKey){
        String key = '%' + searchKey + '%';
        List<Contact> con = [SELECT Id, Name, Title, Phone, Email FROM Contact WHERE Name LIKE :key];
        return con;
    }

    @AuraEnabled()
    public static List<Contact> imperativeCallContact(){
        List<Contact> con = [SELECT Id, Name, Title, Phone, Email FROM Contact LIMIT 3];
        return con;
    }

}
