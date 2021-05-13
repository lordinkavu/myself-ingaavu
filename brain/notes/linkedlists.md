---
title: Linked Lists
tags: programming
---

## Linked Lists

Linked lists are linear data structures that hold data in individual objects called nodes. These nodes hold both the data and a reference to the next node in the list.

Linked lists are often used because of their efficient insertion and deletion.

Random access not available. Takes O(n) time.



### Implementation

```cpp
struct Node{
		int data;
		Node* next;
};
Node* head; // Gloabl head variable. Can be accessed anywhere.
```

### Traversal

```cpp
//Function to iterate through the linked list.
void print_list(){
	Node* temp=head;
	while(temp!=NULL){
		cout<<n->data<<" "; // n->data equals *n.data
		temp = temp->next;
	}
}
```

### Insert at beginning

```cpp
//Insert node at the beginning.
void insert_begin(int value){
	Node* temp = new Node;
	temp->data = value;
	temp->next = head;
	head = temp;
	return;
}
```

### Insert at nth position

```cpp
//Insert node at the nth position.
void insert(int value,int n){
	Node* temp = new Node;
	temp->data = value;
	temp->next=NULL;
	if(n==1){
		  temp->next=head;
		  head=temp;
		  return;
	};
	Node* link = head;
	
	for(int i=0;i<n-2;i++){
		  link=link->next;
			
	}
	temp->next=link->next;
	link->next=temp;
	return;
}
```

### Delete a node at nth position.

```cpp
void delete_node(int n){
	if(n==1){
		Node* temp=head;
		head=head->next;
		delete temp;
		return;
	
	}
	Node* link=head;
	for(int i=0;i<n-2;i++){
		link=link->next;
	}
	Node* temp1 = link->next;
	link->next = temp1->next;
	delete temp1;
	return;
}
```

### Reversing a linked list - Iterative

```cpp
Node* reverse(Node* head){
	if(head==NULL || head->next==NULL) return head;
	Node *right=head->next;
	head->next=NULL;
	Node* temp;
	while(right!=NULL){
		temp=right->next;
		right->next=head;
		head=right;
		right=temp;
	}
	return head;
}
```

### Reversing a LL - Recursive

```cpp
ListNode* reverseList(ListNode* head) {
        if(head==NULL || head->next==NULL) return head;
	ListNode *temp=reverseList(head->next);
        head->next->next=head;
        head->next=NULL;
        return temp;
}
```