#include <stdio.h>

int main() {
    int n;
    printf("Enter the number of array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\n", n);

    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
  }

    printf("Unique elements in the array: ");

    for (int i = 0; i < n; i++) {
        int num = 1;
        for (int j = 0; j < n; j++) {
            if (i != j && arr[i] == arr[j]) {
                num = 0;
                break;
            }
        }
        if (num) {
            printf("%d ", arr[i]);
        }
    }

    return 0;
}g