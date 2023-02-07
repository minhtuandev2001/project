#include<stdio.h>
void nhapMang(int x[] , int &n){
	do{
	printf(" so luong phan tu cua mang  ");
	scanf("%d",&n);
		
	}while(n< 1 || n > 100);
	
	int i ;
	for( i = 0 ; i < n ; i++){
		printf(" x[%d] = ", i);
		scanf("%d" ,&x[i]);
	}
}
void xuat(int x[] , int n){
	int i ;
	for( i = 0 ; i < n ; i++){
		printf(" %d " , x[i]);
	}
	printf("\n");
}
int KiemtraMangCon(int x1[] , int n1 , int x2[] , int n2){
	int kq = 0 ;
	if(n2<=n1){
		for(int i = 0 ; i< n1 ; i++){
			if(x1[i]==x2[0]){
				int j = 0 ;
				for(; j < n2 ; j++){
					if(x1[i+j]!=x2[j])
						break;
				}
				if(j==n2)
					kq= 1;
			}
		}
	}
	return kq;
}
int main(){
	int a[100] , b[100];
	int n , n1 ,n2 ;
	nhapMang(a,n1);
	xuat(a,n1);
	
	nhapMang(b,n2);
	xuat(b,n2);
	
	int kt =KiemtraMangCon(a,n1,b,n2);
	if(kt){
		printf(" mang b la con mang a");
	}else{
		printf(" mang b khong phai con cua mang a ");
	}   
	
}
