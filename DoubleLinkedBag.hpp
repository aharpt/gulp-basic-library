/* Aaron Harpt */


#ifndef DOUBLE_LINKED_BAG_RECURSIVE_
#define DOUBLE_LINKED_BAG_RECURSIVE_

#include "BagInterface.h"
#include "Node.hpp"
#include <cstddef>

template<class ItemType>
class DoubleLinkedBag : public BagInterface<ItemType>
{
private:
	Node<ItemType>* headPtr; // Pointer to first node
							 // STEP 6
	Node<ItemType> * tailPtr;
	int itemCount;           // Current count of bag items

							 // Fills the vector bagContents with the data in the nodes of
							 // the linked chain to which curPtr points.
	void fillVector(std::vector<ItemType>& bagContents, Node<ItemType>* curPtr) const;

	// Locates a given entry within this bag.
	// Returns either a pointer to the node containing a given entry or
	// the null pointer if the entry is not in the bag.
	Node<ItemType>* getPointerTo(const ItemType& target,
		Node<ItemType>* curPtr) const;

	// Counts the frequency of occurrence of a given entry in this bag.
	int countFrequency(const ItemType& anEntry, int counter,
		Node<ItemType>* curPtr) const;

	// Deallocates all nodes assigned to this bag
	void deallocate(Node<ItemType>* nextNodePtr);

public:
	DoubleLinkedBag();
	virtual ~DoubleLinkedBag();                       // Destructor should be virtual
	int getCurrentSize() const;
	bool isEmpty() const;
	bool add(const ItemType& newEntry);
	bool remove(const ItemType& anEntry);
	void clear();
	bool contains(const ItemType& anEntry) const;
	int getFrequencyOf(const ItemType& anEntry) const;
	std::vector<ItemType> toVector() const;
}; // end LinkedBagRecursive

   // STEP 7 - Update constructor below
template<class ItemType>
DoubleLinkedBag<ItemType>::DoubleLinkedBag() : headPtr(nullptr), itemCount(0), tailPtr(nullptr)
{
}  // end default constructor

template<class ItemType>
DoubleLinkedBag<ItemType>::~DoubleLinkedBag()
{
	clear();
}  // end destructor

template<class ItemType>
bool DoubleLinkedBag<ItemType>::isEmpty() const
{
	return itemCount == 0;
}  // end isEmpty

template<class ItemType>
int DoubleLinkedBag<ItemType>::getCurrentSize() const
{
	return itemCount;
}  // end getCurrentSize

template<class ItemType>
bool DoubleLinkedBag<ItemType>::add(const ItemType& newEntry)
{
	// Add to beginning of chain: new node references rest of chain;
	// (headPtr is null if chain is empty)        
	Node<ItemType>* nextNodePtr = new Node<ItemType>();
	nextNodePtr->setItem(newEntry);
	nextNodePtr->setNext(headPtr);  // New node points to chain

									// STEP 9

	// if node is added, second node (used to be first node) prev pointer points to head node

	if (headPtr != nullptr) {
		headPtr->setPrev(nextNodePtr);
	}

	headPtr = nextNodePtr;          // New node is now first node

	
	/*
	if (headPtr != nullptr) {
		headPtr->getNext()->setPrev(nextNodePtr);
	}
	*/
									

	// STEP 8
	if (tailPtr == nullptr) {
		tailPtr = nextNodePtr;
	}

	itemCount++;

	return true;
}  // end add

template<class ItemType>
std::vector<ItemType> DoubleLinkedBag<ItemType>::toVector() const
{
	std::vector<ItemType> bagContents;
	fillVector(bagContents, tailPtr);  // STEP 12
	return bagContents;
}  // end toVector

template<class ItemType>
bool DoubleLinkedBag<ItemType>::remove(const ItemType& anEntry)
{
	Node<ItemType>* entryNodePtr = getPointerTo(anEntry, headPtr);
	bool canRemoveItem = !isEmpty() && (entryNodePtr != nullptr);
	if (canRemoveItem)
	{
		// Copy data from first node to located node
		entryNodePtr->setItem(headPtr->getItem());

		// Delete first node
		Node<ItemType>* nodeToDeletePtr = headPtr;
		headPtr = headPtr->getNext();

		// STEP 10

		if (headPtr == nullptr) {
			tailPtr = nullptr;
		}

		// Return node to the system
		nodeToDeletePtr->setNext(nullptr);
		delete nodeToDeletePtr;
		nodeToDeletePtr = nullptr;

		itemCount--;
	} // end if

	return canRemoveItem;
}  // end remove

template<class ItemType>
void DoubleLinkedBag<ItemType>::clear()
{
	deallocate(headPtr);
	headPtr = nullptr;

	// STEP 11
	tailPtr = nullptr;

	itemCount = 0;
}  // end clear

template<class ItemType>
int DoubleLinkedBag<ItemType>::getFrequencyOf(const ItemType& anEntry) const
{
	return countFrequency(anEntry, 0, headPtr);
}  // end getFrequencyOf

template<class ItemType>
bool DoubleLinkedBag<ItemType>::contains(const ItemType& anEntry) const
{
	return (getPointerTo(anEntry, headPtr) != nullptr);
}  // end contains



   // Private Methods:

template<class ItemType>
void DoubleLinkedBag<ItemType>::fillVector(std::vector<ItemType>& bagContents,
	Node<ItemType>* curPtr) const
{
	if (curPtr != nullptr)
	{
		bagContents.push_back(curPtr->getItem());
		fillVector(bagContents, curPtr->getPrev()); // STEP 13
	} // end if
}  // end toVector

template<class ItemType>
Node<ItemType>* DoubleLinkedBag<ItemType>::getPointerTo(const ItemType& target,
	Node<ItemType>* curPtr) const
{
	Node<ItemType>* result = nullptr;
	if (curPtr != nullptr)
	{
		if (target == curPtr->getItem())
			result = curPtr;
		else
			result = getPointerTo(target, curPtr->getNext());
	} // end if

	return result;
}  // end getPointerTo

template<class ItemType>
int DoubleLinkedBag<ItemType>::countFrequency(const ItemType& anEntry, int counter,
	Node<ItemType>* curPtr) const
{
	int frequency = 0;
	if ((curPtr != nullptr) && (counter < itemCount))
	{
		if (anEntry == curPtr->getItem())
		{
			frequency = 1 + countFrequency(anEntry, counter + 1, curPtr->getNext());
		}
		else
		{
			frequency = countFrequency(anEntry, counter + 1, curPtr->getNext());
		}  // end if
	} // end while

	return frequency;
}  // end countFrequency

template<class ItemType>
void DoubleLinkedBag<ItemType>::deallocate(Node<ItemType>* nextNodePtr)
{
	Node<ItemType>* nodeToDeletePtr = nextNodePtr;
	if (nextNodePtr != nullptr)
	{
		nextNodePtr = nextNodePtr->getNext();
		delete nodeToDeletePtr;
		nodeToDeletePtr = nextNodePtr;
		deallocate(nextNodePtr);
	}  // end if
}  // end deallocate


#endif
