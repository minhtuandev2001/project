#include<stdio.h>
//cai dat bang bam su dnung Separate chaining
// gia dinh : ham bam se tra ve so int trong [0,19]
vector <string> hashTable[20];
int hashTableSize = 20;
// them vao bang bang 
void insert(string s){
	int index = hashFunc(s);
	hashTable[index].push_back(s);
}
// tim kiem trong bang bam 
void search(string s){
	int index = hashFunc(s);
	for(int i = 0 ; i < hashTable[index].size(); i++){
		if(hashTable[index][i]==s){
			cout<< s<<" is found! "<<endl;
			return;
		}
	}
	cout<<s<<" is not found! "<<endl;
}
// dung Linear probing 
//Trong k? thu?t x? l� va ch?m n�y, ch�ng ta s? kh�ng d�ng linklist d? luu tr? m� ch? c� b?n th�n array d� th�i.
//
//Khi th�m v�o b?ng bam, n?u ch? m?c d� d� c� ph?n t? r?i; Gi� tr? ch? m?c s? du?c t�nh to�n l?i theo co ch? tu?n t?. Gi? s? r?ng ch? m?c l� ch? s? c?a m?ng, khi d�, vi?c t�nh to�n ch? m?c cho ph?n t? du?c t�nh theo c�ch sau:
//
//index = index % hashTableSize
//index = (index + 1) % hashTableSize
//index = (index + 2) % hashTableSize
//index = (index + 3) % hashTableSize
//
//V� c? th? theo c�ch nhu v?y ch?ng n�o index thu du?c chua c� ph?n t? du?c s? d?ng. T?t nhi�n, kh�ng gian ch? m?c ph?i du?c d?m b?o d? lu�n c� ch? cho ph?n t? m?i.
//

//- khong co nhieu hon 20 phan tu trong tap du lieu
/-ham bam se tra vee mot so nguyen tu 0 den 19 
/- tap du ieu phai la cac phan tu duy nhat 

string hashTable[21];
int hashTableSize  = 21;
// them vao bang bam 
void insert(string s){
	int index = hashFunc(s);
	
	while(hashTable[index] != ""){
		index = (index+1) % hashTableSize;
		hashTable[index] = s ;
	}
}
// tim kiem 
void search(string s){
	index = hashFunc(s);
	
	while(hashTable[index] != s and hashTable[index] !=""){
		index = (index + 1) % hashTableSize;
	}
	 if(hashTable[index] == s)
        cout << s << " is found!" << endl;
    else
        cout << s << " is not found!" << endl;
}
// Quadratic Probing
string hashTable[21];
int hashTableSize = 21;
 
void insert(string s)
{
    //Compute the index using the hash function
    int index = hashFunc(s);
    //Search for an unused slot and if the index will exceed the hashTableSize roll back
    int h = 1;
    while(hashTable[index] != "")
    {
        index = (index + h*h) % hashTableSize;
             h++;
    }
    hashTable[index] = s;
} 
void search(string s)
{
    //Compute the index using the Hash Function
    int index = hashFunc(s);
     //Search for an unused slot and if the index will exceed the hashTableSize roll back
   int h = 1;
    while(hashTable[index] != s and hashTable[index] != "")
    {
        index = (index + h*h) % hashTableSize;
             h++;
    }
    //Is the element present in the hash table
    if(hashTable[index] == s)
        cout << s << " is found!" << endl;
    else
        cout << s << " is not found!" << endl;
}
//Double hashing
//index = (index + 1 * indexH) % hashTableSize;
//index = (index + 2 * indexH) % hashTableSize;
string hashTable[21];
int hashTableSize = 21;

void insert(string s)
{
    //Compute the index using the hash function1
    int index = hashFunc1(s);
    int indexH = hashFunc2(s);
    //Search for an unused slot and if the index exceeds the hashTableSize roll back
    while(hashTable[index] != "")
        index = (index + indexH) % hashTableSize;
    hashTable[index] = s;
}

void search(string s)
{
    //Compute the index using the hash function
    int index = hashFunc1(s);
    int indexH = hashFunc2(s);
     //Search for an unused slot and if the index exceeds the hashTableSize roll back
    while(hashTable[index] != s and hashTable[index] != "")
        index = (index + indexH) % hashTableSize;
    //Is the element present in the hash table
    if(hashTable[index] == s)
        cout << s << " is found!" << endl;
    else
        cout << s << " is not found!" << endl;
}


int main(){
	
}
