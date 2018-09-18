/* Aaron Harpt */

#include "BagInterface.h"
#include "DoubleLinkedBag.hpp"
#include <iostream>
#include <string>
#include <cctype>

using namespace std;

void displayBag(BagInterface<string>* bagPtr)
{
	cout << "The bag contains " << bagPtr->getCurrentSize()
		<< " items:" << endl;
	vector<string> bagItems = bagPtr->toVector();

	int numberOfEntries = (int)bagItems.size();
	for (int i = 0; i < numberOfEntries; i++)
	{
		cout << bagItems[i] << " ";
	}  // end for
	cout << endl << endl;
}  // end displayBag

void bagTester(BagInterface<string>* bagPtr)
{
	cout << "isEmpty: returns " << bagPtr->isEmpty()
		<< "; should be 1 (true)" << endl;

	string items[] = { "one", "two", "three" };
	cout << "Add 3 items to the bag: " << endl;
	for (int i = 0; i < 3; i++)
	{
		bagPtr->add(items[i]);
	}  // end for

	displayBag(bagPtr);
	cout << "isEmpty: returns " << bagPtr->isEmpty()
		<< "; should be 0 (false)" << endl;
	cout << "getCurrentSize returns : " << bagPtr->getCurrentSize()
		<< "; should be 3" << endl;

	cout << endl << "Clear the bag." << endl;
	bagPtr->clear();

	cout << "isEmpty: returns " << bagPtr->isEmpty()
		<< "; should be 1 (true)" << endl;

	cout << "Add 3 items to the bag again: " << endl;
	for (int i = 0; i < 3; i++)
	{
		bagPtr->add(items[i]);
	}  // end for

	displayBag(bagPtr);

}  // end bagTester

int main()
{
	BagInterface<string>* bagPtr = nullptr;

	bagPtr = new DoubleLinkedBag<string>();
	cout << "Testing the Double Linked Bag:" << endl;

	cout << "The initial bag is empty." << endl;
	bagTester(bagPtr);
	delete bagPtr;
	bagPtr = nullptr;
	cout << "All done!" << endl;

	// Keep the console open so we can see the output
	cin.ignore();
	cin.get();

	return 0;
}  // end main




