#include<iostream>
#include<cstdlib>
using namespace std;

struct movies_t {
	char title [50] ;
	int year;
	
};

int main (){
	char buffer[50];
	
	movies_t  amovie ;
	movies_t  *pmovie;
	pmovie = &amovie ;
	
	cout << "enter title : ";
	cin.getline(pmovie->title,50);
	
	cout<<"enter year :" ;
	cin.getline(buffer,50);
	
	pmovie->year = atoi (buffer);
	
	cout<<"\n You have enterd: \n";
	
	cout<< pmovie->title;
	cout<< " (" <<pmovie->year <<")\n";
	
	
	return 0 ;
}
