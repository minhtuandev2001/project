#include<stdio.h>
#include<stdlib.h>
// cay tim kiem nhi phan 
typedef struct Node{
	int data ;
	Node* left;
	Node* right;
}node_t;
// Ham giai phong giu lieu 
void Free(node_t* root){
	if(root ==NULL)
		return ;
	Free(root->left);
	Free(root->right);
	Free(root);
}
//Ham dieu huong cua cay 
// ham duoi day se them va tim kiem phan tu cua cay 
int LeftOf(const int value , const node_t* root){
	// ban co the su dung code thu 2 neu nhu muon lay gia tri trung lap 
	return value < root->data;		// o day minh se khong cho phep them phan tu trung lap 
	//	return value<= root->data;
}
int RightOf(const int value , const node_t* root){
	return value > root->data;
}
// them phan tu vao 
node_t* Insert(node_t* root , const int value){
	if(root == NULL){
		node_t* node = (node_t*) malloc (sizeof(node_t));
		node->left = NULL;
		node->right= NULL;
		node->data=value;
		
		return node;
	}
	if(LeftOf(value , root)){
		root->left=Insert(root->left,value);
	}else if(RightOf(value,root)){
		root->right=Insert(root->right,value);
	}
	return root;
}
// lay gia tri con dai nhat 
int LeftMostValue(const node_t* root){
	while(root->left != NULL){
		root = root->left;
	}
	return root->data;
}
node_t* Delete(node_t* root , int value){
	if(root==NULL){
		return root;
	}
	if(LeftOf(value,root)){
		root->left = Delete(root->left,value);
	}else if(RightOf(value,root)){
		root->right =Delete(root->right,value);
	}else{
		if(root->left == NULL){
			node_t* newRoot =root->right;
			free(root);
			return newRoot;
		}
		if(root->right==NULL){
			node_t* newRoot = root->left;
			free(root);
			return newRoot;
		}
		root->data = LeftMostValue(root->right);
		root->right=Delete(root->right, root->data);
	}
	return root;
}
// duyet cay tim kiem nhi phan 
// duyet PreOrder
// quy trinh se thuc hien theo thu tu Node->Left->right
// b1 ghe tham node root
// b2 dung de quy duyet qua node trai
// b3 dung de quy duyet qua node phai
void PreOrder(node_t* root){
	if(root != NULL){
		printf("%d ",root->data);
		PreOrder(root->left);
		PreOrder(root->right);
	}
}
// duyet InOrder
// quy trinh duyet inorder Left->node->right
// b1 goi de quy duyet qua cay con ben trai
// b2 ghe tham Node root
// b3 goi de quy duyet qua cay con ben phai 
void InOrder(node_t* root){
	if(root != NULL){
		InOrder(root->left);
		printf("%d ",root->data);
		InOrder(root->right);
	}
}
// duyet PostOrder
// quy trinh se thu hien theo left->right->node
// b1 goi de quy duyet qua cay con trai
// b2 goi de quy duyet qua cay con ben phai 
// b3 ghe tham Node root
void PostOrder(node_t* root){
	if(root != NULL){
		PostOrder(root->left);
		PostOrder(root->right);
		printf("%d ",root->data);
	}
}
int main()
{
    node_t* root = NULL;
 
    root = Insert( root, 25 );
    root = Insert( root, 15 );
    root = Insert( root, 50 );
    root = Insert( root, 10 );
    root = Insert( root, 22 );
    root = Insert( root, 35 );
    root = Insert( root, 70 );
    root = Insert( root, 4 );
    root = Insert( root, 12 );
    root = Insert( root, 18 );
    root = Insert( root, 24 );
    root = Insert( root, 31 );
    root = Insert( root, 44 );
    root = Insert( root, 66 );
    root = Insert( root, 90 );
    printf("\nDuyet preorder : ");
    PreOrder(root);
    printf("\nDuyet inorder  : ");
    InOrder(root);
    printf("\nDuyet postorder:");
    PostOrder(root);
 
    printf("\n==Thu them phan tu 15 vao BTS==\n");
    Insert(root, 15);
    printf("\nDuyet preorder : ");
    PreOrder(root);
    printf("\nDuyet inorder  : ");
    InOrder(root);
    printf("\nDuyet postorder:");
    PostOrder(root);
 
 
    printf("\n==Thu xoa phan tu 50 khoi BTS==\n");
    Delete(root, 50);
    printf("\nDuyet preorder : ");
    PreOrder(root);
    printf("\nDuyet inorder  : ");
    InOrder(root);
    printf("\nDuyet postorder:");
    PostOrder(root);
 
 
 
 
    Free( root );
    root = NULL;
    return 0;
}
