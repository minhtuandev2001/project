#include<iostream>
using namespace std; 
int main()
{
	int P,Q,i,a,b,t=0;
	cout<<"nhap can duoi:";cin>>P;
	cout<<"nhap can tren:";cin>>Q;
	if(P>Q) cout<<"can duoi cua ban lon hon can tren,vui long nhap lai";
	else
	{
	  for(a=P;a<Q;a++)
	      {
	       for(b=a+1;b<Q;b++)
		{            for(i=1;i<=a;i++)
			{
			if((a%i==0)&&(b%i==0))t++;
			 }
		     if(t==1)cout<<endl<<a<<"va"<<b<<"nguyen to cung nhau";
		     else cout<<endl<<a<<"va"<<b<<"khong nguyen to cung nhau";
		 }
	      }
	   }

}

