#include<iostream>
#include<cstring>
using namespace std;
void my_strcat(char a[] , char b[]){
	size_t len1 = strlen(a);
	size_t len2 = strlen(b);
	size_t size = sizeof(a)+sizeof(b); // neu len1 + len2 thi thieu mat \n nen dung skizeof
	
	if(size<len1+len2+1){
		cout<<"chuoi 2 khong du dung luong";
	}else{
		for(int i = 0 ; i< size ; i++){
			a[len1+i]=b[i];
		}
	a[len1+len2]='\0';
	}
}

int main(){
	char s1[100];
	char s2[200];
	
	cout<<"nhap chuoi s1 ";
	gets(s1);
	cout<<"nhap chuoi s2 ";
	gets(s2);
	
	cout<<"chuoi s1 = "<<s1<<endl;
	cout<<"chuoi s2 = "<<s2<<endl;
	
	cout<<"chuoi s1 noi vao chuoi s2 ham co san "<<strcat(s1,s2)<<endl;
	
	cout<<"chuoi s1 noi vao chuoi s2 ham tu code my_strcat(s1,s2);";
	
	
	return 0;
}
