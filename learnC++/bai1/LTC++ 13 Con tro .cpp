#include<iostream>
using namespace std;
int main(){
	int value1 = 5 , value2 = 15;
	int *p1 , *p2;
	
	p1= &value1;	//p1 lay dia chi cua value1
	*p1 = 10;		//*p1 gia tri dc tro boi p1 , p1=value
	p2 = &value2;
	*p2 = *p1;
	
	p1 = p2 ;   // bay gio dia chi cua p1 bang p2 
	*p1 =20;
	
	cout<<"value1 "<<value1<<endl;
	cout<<"value2 "<<value2;
	return 0 ; 
}
