#include<stdio.h>
//cai dat cay nhi phan 
struct node {
	int data ;
	struct node* left;  // con tro trai node 
	struct node* right; //con tro phai node
};
// khoi tao cua mot node
// node goc 
struct node root;
// khoi tao con tro node 
struct node* MakeNode(int value)
{
	struct node* temp=(node*) malloc (sizeof(node));
	temp->data=value;
	temp->left= temp->right = NULL;
	
	return temp;
}
// tinh chieu cao / chieu sau cua cay 
int MaxDepth(struct node* node){
	if(node==NULL){
		return 0;
	}else{
		// tinh taon do sau cua moi cay con 
		int LDepth = MaxDepth(node->left);
		int rDepth = MaxDepth(node->right);
		
		if(LDepth>rDepth){
			return LDepth+1;
		}else{
			return rDepth+1;
		}
	}
}
int main(){
	
}
