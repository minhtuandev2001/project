#include<stdio.h>
#include<stdlib.h>
struct linkedList {
	int data;
	struct linkedList* next;		 // boi vi no la con tro tro cua chinh 
									 //ban than no , va no tro toi mot thang node ke tiep	
};
// tao mo node moi 
typedef struct linkedList* node;  // tu gio dung kieu du lieu linkedList co the thay bang node ngan gon hon 
								  // typedef dung de dinh nghia mot kieu du lieu trong c 
node CreateNode(int value) {
	node temp;  									// b1 khai bao node 
	temp = (node)malloc(sizeof(struct linkedList)); //b2 cap phat bo nho dung malloc
	temp->next = NULL;                              //b3 cho next tro toi null
	temp->data = value; 							// b4 gan gia tri cho node 

	return temp; 									// b5 tra ve node moi da co gia tri 
}
// them node vao danh sanh lien ket don 
node AddHead(node head, int value) {
	node temp = CreateNode(value);  	// b1 goi ham khoi tao node 

	if (head == NULL) {
		head = temp; 				// b2 neu danh sach chua co node nao thi temp gan vao node dau tien luon 
	}
	else {
		temp->next = head;			// b3 tro next cua temp = head hien tai 
		head = temp; 				// b4 doi head bang temp 
	}
	return head;					// b5 tra ve node dau
}
// them vao cuoi 
node AddTail(node head, int value) {
	node temp, p;                  		// b1 khai baao 2 node tam 
	temp = CreateNode(value);         	// b2 goi ham de tao node moi
	if (head == NULL) {
		head = temp;					 // neu nhu danh sach nay rong thi node moi la node va cung la node cuoi
	}
	else {
		p = head; 					 // b3 p tro den node dau tien 
		while (p->next != NULL) {
			p = p->next; 			 // b4 duyet danh sach lien ket den khi cuoi danh sach
		}
		p->next = temp;				 // b5 gan next cuat thang cuoi  = temp
	}
	return head;
}
// them vao vi tri bat ki 
node AddAt(node head, int value, int pos) {
	if (pos == 0 || head == NULL) {
		head = AddHead(head, value); // neu la vi tri 0 thi chen vao dau 
	}
	else {
		// bat dau tim vi tri can chen . ta dung k de dem vi tri 
		int k = 1;
		node p = head;
		while (p != NULL && k != pos) {
			p = p->next;
			++k;
		}
		if (k != pos) {
			// neu duyet danh sach ma ko co thi co the chen cuoi
			// neu ban khong muon chen , hay thong bao vi tri chen khong hop le 
			head = AddTail(head, value);
			// printf("khong co vi tri chen ");
		}
		else {
			node temp = CreateNode(value);
			temp->next = p->next;
			p->next = temp;
		}
	}
	return head;
}
// xoa node dau lien ket 
node DelHead(node head) {
	if (head == NULL) {							// b1 kt danh sach co null khong
		printf("khong co gi de xoa het");
	}
	else {
		head = head->next;
	}
	return head;
}
node DelTail(node head) {
	if (head == NULL || head->next == NULL) {
		return DelHead(head);
	}
	node p = head;
	while (p->next->next != NULL) {
		p = p->next;
	}
	p->next = NULL; // cho  next bang null

	return head;
}
// xoa o vi tri bat ki 
node DelAt(node head, int pos) {
	if (pos == 0 || head == NULL || head->next == NULL) {
		head = DelHead(head);					// neu vi tri la khong thi xoa dau 
	}
	else {
												// bat dau tim vi tri can xoa 
		int k = 1;
		node p = head;
		while (p->next->next != NULL && k != pos) {
			p = p->next;
			++k;
		}
		if (k != pos) {
			head = DelTail(head);
			printf("ko tim thay vi tri can xoa");
		}
		else {
			p->next = p->next->next;			// tro toi node tiep bo qua node xoa
		}
	}
	return head;
}
// lay gia tri o vi tri bat ki 
int Getindex(node head, int index) {
	int k = 0;
	node p = head;
	while (p->next != NULL && k != index) {
		++k;
		p = p->next;
	}
	return p->data;
}
// tim kiem trong danh sach lien ket
int Search(node head, int value) {
	int pos = 0;
	for (node p = head; p != NULL; p = p->next) {
		if (p->data == value) {
			return pos;
		}
		pos++;
	}
	return -1;
}
// xoa tat cac node trong danh sach lien ket
node DelAll(node head, int value) {
	int pos = Search(head, value);
	while (pos != -1) {
		DelAt(head, pos);
		pos = Search(head, value);
	}
	return head;
}
void Traverser(node head) {		// duyet cac phan node trong danh sach lien ket
	printf("\n");
	for (node p = head; p != NULL; p = p->next) {
		printf(" %d ", p -> data);
	}
}
// ham khoi tao node head
node INThead() {
	node head;
	head = NULL;
	
	return head;
}
// nhap so luong phan tu lien ket 
node Input() {
	node head = INThead();
	int n=0, value=0;
	do {
		printf("\nNhap so luong phan tu n = ");
		scanf("%5d", &n);
	} while (n <= 0);

	for (int i = 0; i < n; ++i) {
		printf("\nNhap gia tri can them: ");
		scanf("%5d",&value);
		head = AddTail(head,value);
	}
	return head;
}
void fun(node head){
	if(head == NULL)
		return ;
	printf("%d *",head->data);
	if(head->next != NULL)
			fun(head->next->next);
	printf("%d ",head->data);
		
}
int main() {
	printf("\n==Tao 1 danh sach lien ket==");
	node head = Input();
	Traverser(head);

	printf("\n==Thu them 1 phan tu vao linked list==");
	head = AddAt(head, 100, 2);
	Traverser(head);

	printf("\n==Thu xoa 1 phan tu khoi linked list==");
	head = DelAt(head, 1);
	Traverser(head);

	printf("\n==Thu tim kiem 1 phan tu trong linked list==");
	int index = Search(head, 5);
	printf("\nTim thay tai chi so %d ", index);

	printf("\nBan co the thu them nhe!");
	
	fun(head);

}
