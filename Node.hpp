//  Created by Frank M. Carrano and Timothy M. Henry.
//  Copyright (c) 2017 Pearson Education, Hoboken, New Jersey.

/* Aaron Harpt */

/** @file Node.h
Listing 4-1 */
#ifndef NODE_
#define NODE_

template<class ItemType>
class Node
{
private:
	ItemType        item; // A data item
	Node<ItemType>* next; // Pointer to next node
						  // STEP 2
	Node<ItemType> * prev;

public:
	Node();
	Node(const ItemType& anItem);
	Node(const ItemType& anItem, Node<ItemType>* nextNodePtr, Node<ItemType> * prevNodePtr);
	void setItem(const ItemType& anItem);
	void setNext(Node<ItemType>* nextNodePtr);
	ItemType getItem() const;
	Node<ItemType>* getNext() const;
	void setPrev(Node<ItemType> * prev);
	Node<ItemType> * getPrev();
}; // end Node

   // STEP 3 - Modify constructor below
template<class ItemType>
Node<ItemType>::Node() : next(nullptr), prev(nullptr)
{
} // end default constructor

  // STEP 3 - Modify constructor below
template<class ItemType>
Node<ItemType>::Node(const ItemType& anItem) : item(anItem), next(nullptr), prev(nullptr)
{
} // end constructor

  // STEP 3 - Modify constructor below
template<class ItemType>
Node<ItemType>::Node(const ItemType& anItem, Node<ItemType>* nextNodePtr, Node<ItemType> * nodePrevPtr) :
	item(anItem), next(nextNodePtr), prev(prevNodePtr)
{
} // end constructor

template<class ItemType>
void Node<ItemType>::setItem(const ItemType& anItem)
{
	item = anItem;
} // end setItem

template<class ItemType>
void Node<ItemType>::setNext(Node<ItemType>* nextNodePtr)
{
	next = nextNodePtr;
} // end setNext

  // STEP 4

template<class ItemType>
void Node<ItemType>::setPrev(Node<ItemType> * prevNode) {
	prev = prevNode;
}

template<class ItemType>
ItemType Node<ItemType>::getItem() const
{
	return item;
} // end getItem

template<class ItemType>
Node<ItemType>* Node<ItemType>::getNext() const
{
	return next;
} // end getNext

  // STEP 5

template<class ItemType>
Node<ItemType> * Node<ItemType>::getPrev() {
	return prev;
}

#endif
