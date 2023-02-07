#include<stdio.h>
#include<stdlib.h>
// them vao hang doi , hang doi chi co the them vao o cuoi 
// rear la chi so phan tu , gia tri rear can thay doi nen ta truyen tham chieu 
void Enqueue(char queue[] , char element , int &rear , int SizeArray){
	if(rear == SizeArray){
		printf("khong du dung luong ");
	}else{
		queue[rear] = element;
		rear++;
	}
}
// xoa khoi dau hang doi 
// ta co queue 1 2 3 4 5 front = 1 de xoa thi tang front q[0]=1 don vi => q[1]=2
void Delqueue(char queue[] , int & front , int rear){
	if(front == rear){
		printf("hang doi dang rong ");
	}else{
		queue[front]= 0 ;
		front++;
	}
}
// lay gia tri dau hang doi
int Front(int queue[] , int front){
	return queue[front];
}
// MOT SO HAM HO TRO KHAC 
// ham lay kich thuoc cau hang doi
int Size(int front , int rear){
	return (rear - front);
}
// kiem tra hang doi rong 
bool IsEmpty(int front , int rear){
	return (front == rear);
}
char Front(char queue[] , int front){
	return queue[front];
}
int main(){
	char queue[20] = {'a', 'b', 'c', 'd'};        
    int front = 0, rear = 4;                
    int arraySize = 20;                // Size of the array
    int N = 3;                    // Number of steps
    char ch;
    for(int i = 0;i < N;++i) {
        ch = Front(queue, front);
        Enqueue(queue, ch, rear, arraySize);
        Delqueue(queue, front, rear);
    }
    for(int i = front;i < rear;++i)
        printf("%c ", queue[i]);
    printf("\n");
    return 0;
	
}
