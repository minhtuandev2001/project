#include<stdio.h>
#include<string.h>
struct Date{
	int day ; 
	int month;
	int year;
};
				// tu khoa  , kieu du lieu , bien
void inputDate(struct Date &d){
	printf("\n Nhap vao ngay ");
	scanf("%d",&d.day);
	
	printf("\n Nhap vao thang ");
	scanf("%d",&d.month);
	
	printf("\n Nhap vao nam ");
	scanf("%d",&d.year);
}
void printDate(struct Date d){
	printf(" %d/%d/%d",d.day , d.month , d.year);
}
int checkDate(struct Date d){
	if(d.day < 0 || d.month < 0 || d.year<0){
		return 0;
	}
	if(d.month > 12){
		return 0 ;
	}
	if(d.month==2){
		if(d.day>28){
			return 0 ;
		}
	}
	if(d.month == 1 || d.month == 3 || d.month == 5 || d.month == 7 || d.month == 8 || d.month == 10 || d.month==12){
		if(d.day> 31){
			return 0;
		}
	}
	if(d.day>30){
		return 30;
	}
	return 1;
}
int main(){
	struct Date myDate;
	inputDate(myDate);
	printf("\n -------------\n");
	printDate(myDate);
	printf("\n KIem tra ngay thang :%s" ,checkDate(myDate)==1?"ngay thang dung":"ngay thang sai");
}
