#include<stdio.h>
#include<string.h>
#include<time.h>
struct date{
	int ngay;
	int thang ;
	int nam;
};
struct SinhVien{
	int id;
	char ten[50];
	char gioitinh[5];
	date ngaysinh;
	int tuoi;
	float diemMon1;
	float diemMon2;
	float diemMon3;
	float diemTrungBinh;
	char hocluc[10];
	char malop[30];
};
typedef SinhVien SV ;
void nhapSinhVien(SV &sv);
void inSinhVien(SV sv);
void tinhTuoi(SV &sv);
void tinhDiemTrungBinh(SV *sv);
void xepLoai(SV &sv);
void capNhatSinhVien(SV &sv);
void nhapDanhSachSinhVien(SV ds[] , int &n);
void xuatDanhSachSinhVien(SV ds[] , int n);
float timMax_DiemTrungBinh(SV ds[] , int n);
int timMin_Tuoi(SV ds[] , int n);
void xuatDanhSachSinhVienXepTheoLoaiGioi(SV ds[] , int n);
void xuatDanhSachSinhVienTheoTenLop(SV ds[] , int n , char lop[]);
int timSinhVienTheoTen(SV ds[] , int n , char ten[]);
void xoaSinhVienTheoId(SV ds[], int &n , char ten[]);
void sapXepSinhVienTheoDTB(SV ds[] , int n);
void sapXepDanhSachSinhVienTheoTen(SV ds[] , int n);

void xoaxuongdong(char x[]){
	size_t len = strlen(x);
	if(x[len-1]=='\n'){
		x[len-1]='\0';
	}
}
void nhapSinhVien(SV &sv){
	printf("\nnhap ID : "); scanf("%d",&sv.id);
	printf("\nnhap Ten : ");fflush(stdin); fgets(sv.ten , sizeof(sv.ten),stdin);
	xoaxuongdong(sv.ten);
	printf("\nnhap Gioi Tinh  : "); fflush(stdin); fgets(sv.gioitinh , sizeof(sv.gioitinh),stdin);
	printf("\nnhap ngay sinh  : "); scanf("%d%d%d",&sv.ngaysinh.ngay , &sv.ngaysinh.thang ,&sv.ngaysinh.nam);
	printf("\nDiem Mon 1 : "); scanf("%f",&sv.diemMon1);
	printf("\nDiem Mon 2 : "); scanf("%f",&sv.diemMon2);
	printf("\nDiem Mon 3 : "); scanf("%f",&sv.diemMon3);
	printf("\nMa Lop : "); fflush(stdin); fgets(sv.malop , sizeof(sv.malop),stdin);
	xoaxuongdong(sv.malop);
	
}
void tinhTuoi(SV &sv){
	time_t TIME = time(0);
	tm* NOW = localtime(&TIME);
	int namHienTai = NOW->tm_year+1900;
	sv.tuoi = namHienTai- sv.ngaysinh.nam;
	
}
void tinhDiemTrungBinh(SV *sv){
	sv->diemTrungBinh = (sv->diemMon1+sv->diemMon2+sv->diemMon3)/3;
}
void xepLoai(SV &sv){
	if(sv.diemTrungBinh>8){
	 	strcpy(sv.hocluc,"gioi");
	}else if(sv.diemTrungBinh>7){
		strcpy(sv.hocluc,"kha");
	}else if(sv.diemTrungBinh>5){
		strcpy(sv.hocluc,"trung binh");
	}else{
		strcpy(sv.hocluc,"yeu");
	}
}
void inSinhVien(SV sv){
	printf("\nID : %d ",sv.id);
	printf("\nTEN : %s",sv.ten);
	printf("\nGIOI TINH : %s",sv.gioitinh);
	printf("\nNGAY SINH : %d/%d/%d",sv.ngaysinh.ngay,sv.ngaysinh.thang,sv.ngaysinh.nam);
	printf("\nTUOI : %d",sv.tuoi);
	printf("\nDIEM M 1: %.2f ",sv.diemMon1);
	printf("\nDIEM M 2: %.2f ",sv.diemMon2);
	printf("\nDIEM M 3: %.2f ",sv.diemMon3);
	printf("\nDIEM TB : %.2f ",sv.diemTrungBinh);
	printf("\nHOC LUC : %s" , sv.hocluc);
	printf("\nMA LOP : %s",sv.malop);
} 
void capNhatSinhVien(SV &sv){
	nhapSinhVien(sv);
	tinhDiemTrungBinh(&sv);
	tinhTuoi(sv);
	xepLoai(sv);
}
void nhapDanhSachSinhVien(SV ds[] , int &n){
	do{
		printf("nhap so luong sinh vien : ");
		scanf("%d",&n);
	}while(n<=0);
	for(int i = 0 ; i < n ; i++){
		printf("nhap vao sinh vien thu %d",i);
		capNhatSinhVien(ds[i]);
	}
}
void xuatDanhSachSinhVien(SV ds[] , int n){
	printf("DANH SACH SINH VIEN : \n");
	
	for(int i = 0 ; i < n ; i++){
		inSinhVien(ds[i]);
		printf("\n");
	}
}
float timMax_DiemTrungBinh(SV ds[] , int n){
	float max = ds[0].diemTrungBinh;
	for(int i = 0 ; i < n ; i++){
		if(max < ds[i].diemTrungBinh){
			max= ds[i].diemTrungBinh;
		}
	}
	return max;
}
int timMin_Tuoi(SV ds[] , int n){
	int min = ds[0].tuoi;
	for(int i = 0 ; i < n ; i++){
		if(min > ds[i].tuoi){
			min = ds[i].tuoi;
		}
	}
	return min;
}
void xuatDanhSachSinhVienXepTheoLoaiGioi(SV ds[] , int n){
	printf("\nDanh Sach Sinh Vien Xep Loai GIOI :\n");
	for(int i = 0 ; i < n ; i++){
		if(strcmp(ds[i].hocluc,"gioi")){
			inSinhVien(ds[i]);
			printf("\n");	
		}
	}
}
void xuatDanhSachSinhVienTheoTenLop(SV ds[] , int n , char lop[]){
	printf("\nNhap Lop Muon In : "); fgets(lop , sizeof(lop), stdin);xoaxuongdong(lop);
	printf("danh sach sinh vien thuoc lop : %s",lop);
	for(int i = 0 ; i < n ; i++){
		if(strcmp(ds[i].malop,lop)){
			inSinhVien(ds[i]);
			printf("\n");	
		}else{
			printf("\nKhong Co Lop Phu Hop : ");
		}
	}
}
int main(){
	SV ds[100];
	int n;
	char lop[100];
	nhapDanhSachSinhVien(ds,n);
	xuatDanhSachSinhVien(ds,n);
	printf("\nMAX CUA DIEM TRUNG BINH : %.2f ",timMax_DiemTrungBinh(ds,n));
	printf("\nMIN TUOI CUA SINH VIEN : %d ",timMin_Tuoi(ds,n));
	xuatDanhSachSinhVienXepTheoLoaiGioi(ds,n);
	xuatDanhSachSinhVienTheoTenLop(ds,n,lop);
}
