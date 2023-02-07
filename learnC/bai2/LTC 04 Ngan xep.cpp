#include<stdio.h>

					// cai dat ngan xep bang mang
		/*	Chung ta se su dung mang mot chieu kieu int lam Stack , mot bien capacity de luu kich thuoc
			(suc chua) cua stack va mot bien top de luu chi so cua phan tu o top cua Stack*/
// kiem tra stack day 
int top = -1;
bool IsFull(int capacity){ 
	if(top>=capacity-1){
		return true;
	}else{
		return false;
	}
}
// kiem tra stack rong 
bool IsEmpty(){
	if(top==-1){
		return true ;
	}else{
		return false;
	}
}
// them phan tu vao dinh stack (push)
void Push(int stack[] , int value ,int capacity ){
	if(IsFull(capacity)== true){
		printf("\nngan xep da day khong them vao dc nua\n");	
	}else{
		++top;
		stack[top]=value;
	}
}
// xoa phan tu khoi dinh stack (Pop)
void Pop(){
	if(IsEmpty()== true){
		printf("\nngan xep nay rong\n");
	}else{
		--top;
	}
	
}
// lay gia tri o dau phan tu stack (Top)
int Top(int stack[]){
	return stack[top];
}
// lay so luong phan tu cua stack dang co (size)		// bien top luu chi so lon nhat cua stack 
int Size(){
	return top+1;
}
int main(){
    int capacity ; 
    int top = -1; 
    int stack[capacity];
    
    printf("nhap vao so luong phan tu cua ngan xep \n");
    scanf("%d",&capacity);
    
    for(int i = 0 ; i < capacity ; i++){
    	printf("them : ");
		scanf("%d",&stack[i]);
		Push(stack,stack[i],capacity);
	}
    printf("kich thuoc cua stack ");
    printf("%d",Size());
    printf("\ntop cua stack la : %d ",Top(stack));
    
    printf("\ncac phan tu trong ngan xep ");
    for(int i = 0 ; i < capacity ; i++){
    	printf("%d ",Top(stack));
    	Pop();
	}
   
}
