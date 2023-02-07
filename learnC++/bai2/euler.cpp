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

   s+=A[i][j];//ð?m các b?c c?a các ð?nh c?a ð? th?

  if(s%2) d++;

 }

 if(d>0) return(FALSE); //N?u có 1 ð?nh b?c l? th? ð? th? không có chu tr?nh Euler.

 return(TRUE); //N?u t?t c? các ð?nh c?a ð? th? là ch?n th? ð? th? có th? có chu tr?nh Euler.

}

void Tim(){

 int v, x, top, dCE;

 int stack[MAX], CE[MAX];

 top=1;

 stack[top]=u;//thêm ð?nh u vào stack.

 dCE=0;

 do {

  v = stack[top];//l?y ð?nh trên cùng c?a stack.

  x=1;

  while (x<=n && A[v][x]==0) //t?m trong danh sách nh?ng ð?nh k? v?i ð?nh v.

   x++;

  if (x>n) { //l?y ra kh?i stack.

   dCE++;

   CE[dCE]=v;//lýu ð?nh v vào m?ng k?t qu? duy?t CE.

   top--;

  }

  else { //ð?nh x là ð?nh k? v?i ð?nh v.

   top++;

   stack[top]=x;

   A[v][x]=0;

   A[x][v]=0;

  }

 } while(top!=0);

 cout<<" Co chu trinh Euler:";

 for(x=dCE; x>0; x--)

  cout<<(char)(CE[x] + 'a' - 1)<<" "; //in ra k?t qu? dý?i d?ng char.

}

int main(void){

 Init();

 if(Kiemtra())

  Tim();

 else printf("\n Khong co chu trinh Euler");

 _getch();

}
