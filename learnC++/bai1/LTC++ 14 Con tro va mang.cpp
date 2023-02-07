#include<iostream>
using namespace std;
int main(){
	int numbers[5];
	int *p;
	p = numbers ; // numbers la 1 mang (con tro hang) vi tri dau tien trong mang cung la dia chi mang
	*p = 10 ;		// p vi tri thu 1 trong mang 
	p++ ; *p =20 ;   // p++ laf vi tri 2 trong mang 
	p = &numbers[2]; *p = 30;  // p gan = gia tri cua vi tri thu 3 
	p = numbers + 3 ; *p =40; // la vi tri thu 4 trong mang // numbers = 1 (vi tri dau tien ) , 1+3 =4 ;
	p = numbers ; *(p+4) = 50 ; // number = 1 ; // *(p+4)  trong do p vi tri thu 1 = number + 4 = 5 // * gia tri dc tro boi  
	
	for(int i = 0 ; i< 5 ; i++){
		cout<<numbers[i]<<" ";
	}
	
	return 0 ;
}
