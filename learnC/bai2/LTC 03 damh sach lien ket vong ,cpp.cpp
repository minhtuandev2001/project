#include<stdio.h>
#include<stdlib.h>
struct Node{
	int data;
	struct Node* next ;
};
typedef struct Node NODE;

NODE* CreateNode(int data){
	NODE * newNode = (NODE *) malloc (sizeof(NODE));
	newNode->data = data ;
	
	return newNode;
}

int Length(NODE* tail){
	NODE* current = tail ;
	int i = 1;
	if(tail == NULL){
		return 0;
	}else{
		current = current->next;
		while(current != tail){
			i++;
			current = current->next;
		}
	}
	return i;
}
// them vao dau danh sach 
NODE* InsertHead(NODE* tail , int data){
	NODE* newNode = CreateNode(data);
	if(tail==NULL){
		tail = newNode;
		newNode->next = newNode;
	}else{
		newNode->next = tail->next;
		tail->next = newNode;
	}
	return tail ;
}
// them vao cuoi danh sach 
NODE* InsertEnd(NODE* tail , int data){
	return InsertHead(tail,data)->next;
}
// them vao vi tri bat ki 
NODE* InsertArbinary(NODE* tail , int data , int location ){
	int length = Length(tail), i;
	if(location < 1 || location > length+1){
		printf("vi tri chen khong hop le ");
	}else{
	     if (tail == NULL) return InsertHead(tail, data);
        NODE * newNode = CreateNode(data), * current = tail;
        for (i = 1; i != location; i++) current = current -> next;
        newNode -> next = current -> next;
        current -> next = newNode;
        if (location == length + 1) tail = newNode;
    }
	return tail;
}
// xoa theo gia tri duoc chi dinh 
NODE* DeleteArt(NODE* tail , int data){
	NODE* current = tail , *prev;
	if(tail==NULL){
		return tail;
	}else if(tail== tail->next){
		if(tail->data == data){
			tail = NULL ;
			free(current);
		}
		return tail;
	}
	do{
		prev = current;
		current = current -> next;
		if(current->data ==data){
			prev->next = current->next;
			if(current==tail){
				tail = prev;
			}
			free(current);
			current = prev->next;
		}
	}while(current != tail);
	return tail;
}
// xoa theo gia tri duoc chi dinh 
NODE* DelLocation(NODE* tail , int location){
	NODE* current , *prev = tail;
	int len = Length(tail), i;
	if(location< 1 || location > len){
		printf("vi tri xoa khong hop le ");
	}else if(len == 1){
		tail = NULL;
		free(current);
	}else{
		current = tail -> next ;
		for(i = 1 ; i< location ; i++){
			prev = current;
			current= current->next;
		}
		prev->next = current->next;
		if(current == tail){
			 tail = prev;
		}
		free(current);
	}
}
// sap xep theo thu tu tang dan
NODE* Sort(NODE* tail){
	if(Length(tail)<2){
		return tail;
	}
	NODE* ptr1 = tail->next , *ptr2 , *min;
	int temp;
	
	while(ptr1->next != tail ->next){
		min = ptr1;
		ptr2 = ptr1->next;
		while(ptr2!=tail ->next){
			if(min->data > ptr2->data){
				min = ptr2;
				ptr2 = ptr2->next;
			}
		}
		if(min != ptr1){
			temp = min->data;
			min->data = ptr1->data;
			ptr1->data = temp;
		}
		ptr1=ptr1->next;
	}
	return tail;
}
void Display(NODE * tail) {
    NODE * current = tail;
    if (tail != NULL) {
        do {
            current = current -> next;
            printf(" %d -> ", current -> data);
        } while (current != tail);
    }
}
int main() {
    NODE * cll = NULL;
    int option, data, location;
    while (1) {
        Display(cll);
        printf("\nlength = %d\n", Length(cll));
        printf("\n\nMENU OF CHOICE\n1. Insert at head\n2. Insert at end\n3. Insert at arbitrary location\n4. Delete by value\n5. Delete by location\n6. Sort\n7. Exit\n");
        printf("Your choice: ");
        scanf("%d", &option);
 
        if (option == 1) {
            printf("Enter data to be inserted: ");
            scanf("%d", &data);
            cll = InsertHead(cll, data);
        } else if (option == 2) {
            printf("Enter data to be inserted at end: ");
            scanf("%d", &data);
            cll = InsertEnd(cll, data);
        } else if (option == 3) {
            printf("Enter data to be inserted: ");
            scanf("%d", &data);
            printf("Enter location to be inserted into: ");
            scanf("%d", &location);
            cll = InsertArbinary(cll, data, location);
        } else if (option == 4) {
            printf("Enter value to be deleted: ");
            scanf("%d", &data);
            cll = DeleteArt(cll, data);
        } else if (option == 5) {
            printf("Enter location to be deleted: ");
            scanf("%d", &location);
            cll = DelLocation(cll, location);
        } else if(option == 6) {
            Sort(cll);
        } else if (option == 7) {
            break;
        }
    }
    return 0;
}
 
