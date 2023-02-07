#include<iostream>

#include<conio.h>

using namespace std;

#define MAX 50

#define TRUE 1

#define FALSE  0

int A[MAX][MAX], n, u=1;

void Init(void){

 freopen("CTEULER.IN","r", stdin);

 cin>>n;

 cout<<" So dinh cua do thi n = "<<n<<endl;

 // nhap ma tran lien ke.

 for(int i=1; i<=n;i++){

  for(int j=1; j<=n;j++){

   cin>>A[i][j];

  }

 }

}

int Kiemtra(){

 int s, d;

 d=0;

 for(int i=1; i<=n;i++){

  s=0;

  for(int j=1; j<=n;j++)

   s+=A[i][j];//�?m c�c b?c c?a c�c �?nh c?a �? th?

  if(s%2) d++;

 }

 if(d>0) return(FALSE); //N?u c� 1 �?nh b?c l? th? �? th? kh�ng c� chu tr?nh Euler.

 return(TRUE); //N?u t?t c? c�c �?nh c?a �? th? l� ch?n th? �? th? c� th? c� chu tr?nh Euler.

}

void Tim(){

 int v, x, top, dCE;

 int stack[MAX], CE[MAX];

 top=1;

 stack[top]=u;//th�m �?nh u v�o stack.

 dCE=0;

 do {

  v = stack[top];//l?y �?nh tr�n c�ng c?a stack.

  x=1;

  while (x<=n && A[v][x]==0) //t?m trong danh s�ch nh?ng �?nh k? v?i �?nh v.

   x++;

  if (x>n) { //l?y ra kh?i stack.

   dCE++;

   CE[dCE]=v;//l�u �?nh v v�o m?ng k?t qu? duy?t CE.

   top--;

  }

  else { //�?nh x l� �?nh k? v?i �?nh v.

   top++;

   stack[top]=x;

   A[v][x]=0;

   A[x][v]=0;

  }

 } while(top!=0);

 cout<<" Co chu trinh Euler:";

 for(x=dCE; x>0; x--)

  cout<<(char)(CE[x] + 'a' - 1)<<" "; //in ra k?t qu? d�?i d?ng char.

}

int main(void){

 Init();

 if(Kiemtra())

  Tim();

 else printf("\n Khong co chu trinh Euler");

 _getch();

}
