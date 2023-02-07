import time
from math import *
from decimal import *
from fractions import *
from random import *
print("chao cac ban nha")
a = 5
b = 6
c = a+b
# khối lệnh thụt vào bằng nhau
if c > 0:
    c += 5
    print("dap an la : ", c)

# lệnh nhiều dòng dùng kí hiệu \
e = 7
f = 8
g = e +\
    f
print("dap an la: ", g)
# không cần dấu nối dòng
ngaytrongtuan = {2, 3,
                 4, 5,
                 6, 7}
print(ngaytrongtuan)
# nhiều lệnh trên một dòng thêm dấu ;
v = 5
x = 7
y = v+x
print("dap an la: ", y)

#  trích dẫn (''' nháy đơn, kép 3 cái giúp xuống dòng)
str1 = """chao cac 'ban
nha """
print(str1)
# biến
x = 12
y = 12
z = y
"cấp phát 1 ô nhớ trong bộ nhớ và ô nhớ này chứa giá trị là 12"
"muốn biết giá trị 12 được lưu ở địa chỉ nào, dùng hàm id()"
# 12 là đối tượng , x y z chỉ tham chiếu đến
print(id(x))
print(id(12))
print(id(y))

# đối tượng là khi nó có địa chỉ
str1Vip = "achao"
print("a trong chuoi str1 có đia chi giong voi a ben ngoai khong")
print(id("a"))
print(id(str1Vip[0]))

a = 5
b = 10
c = a + b
print("id cua gia tri 10 + 5 bang voi 15")
print(id(15))
print(id(c))
print(id(print()))
"hàm cũng là một đối tượng"

'chuyện gì xảy ra với bộ nhớ khi x =5 , print(x) , del(x) , print(x)'

x = 5
print(id(x))
# del (x) ; 'nếu xóa đi thì gặp lỗi không xác định, để lại 1 vị trí được cấp phát nhưng không sử dụng được , tại vì x đã mất liên kết đến địa chỉ đó'
print(x)

' chuyện gì xảy ra khi x = 5 , print(id(x)) , x = x+1 , print(id(x))'
x = 5
print(id(x))
x = x+1
'như vậy x sẽ tham chiếu đến một địa chỉ mới , địa chỉ cũ được cấp phát nhưng không sử dụng nữa nên rất lãng phí'
print(id(x))

# toán tử số học
print(5+2)
print(5-2)
print(5*2)
print(5/2)
print(5 % 2)

# toán tử bit
"1 & 1 = 1, 0 & ... = 0" "toan tu and"
"1 | ....=1 , 0|0 = 0" "toan tu or"
"1 ^ 1 = 0 , 0 ^ 1 = 1 , 1 ^ 0 = 1" "toan tu xor"
"0000 0101 chuyen 5 sang nhi phan"
"0000 0011 chuyen 3 sang nhi phan"
"0000 0001"
x = 5 & 3
print("gia tri x khi 5 & 3 = ", x)
x = 5 | 3
print("gia tri x khi 5 or 3 = ", x)
x = 5 ^ 3
print("gia tri x khi 5 xor 3 = ", x)
# dịch bit
y = 12
"0000 1100"
x = y << 1
"0001 1000"
print("dich bit sang trai", x)
y = 12
"0000 1100"
x = y >> 1
"0000 0110"
print("dich bit sang trai", x)

# toán tử so sánh
"== , != , > , < , >= , <="

# toán tử đồng nhất
x = "abcd"
y = "abcd"
z = x is y
print('toan tu dong nhat is = ', z)
z = x is not y
print('toan tu dong nhat is not = ', z)

# toán tử so sách
x = False
y = True
z = x and y
print('ket qua toan tu so sanh and ', z)

x = 4 > 3
y = 5 > 4
z = x and y
print('ket qua toan tu so sach and ', z)

# toán tủ thành viên
x = "abcdef"
y = "b"
z = y in x
print("gia tri y co la thanh vien cua x = ", z)

# các kiểu dữ liệu số trong python
'dùng type() để biết kiểu dữ liệu'
x = 5
print(type(x))
print(type(10.6))

# import thư viện
getcontext().prec = 40
'thiết lập độ chính xác sau dấu phẩy'
x = 10
y = 3
z = x/y
z = Decimal(x)/Decimal(y)
'kết quả chính xác nhất'
print(z)
print(type(z))

# phân số
x = Fraction(1, 3)
y = Fraction(1, 3)
print(x+y)
print(type(x+y))

# làm tròn
print(ceil(1.4))
print(floor(1.6))

# điều kiện và vòng lặp
z = 10
if z > 5:
    print('dat')
elif z > 4:
    print('gan dat')
else:
    print('khong dat')

# vòng lặp
for i in (0, 1, 2, 3, 4, 5, 6, 7, 8):
    if (i == 4):
        break
    print(i)
for i in (0, 1, 2, 3, 4, 5, 6, 7, 8):
    if (i == 4):
        continue
    print(i)

# vòng lặp for và while
a = ["hello", "sai gon", "viet nam", "indonesia", "lao"]
print(type(a))
for i in a:
    print(i)

a = ("hello", "sai gon", "viet nam", "indonesia", "lao")
print(type(a))
for i in a:
    print(i)

a = 'hello world'
print(type(a))
for i in a:
    print(i)

a = range(6, 12)
'trả về dãy 6 đến 11 số'
print(type(a))
for i in a:
    print(i)

# vòng lặp while
tien = 100
while tien > 0:
    print('van con ', tien, 'nghin trong tai khoan')
    tien = tien - 10
print('het tien trong tai khoan')

# ứng dụng tính phương trình bậc 2
print('nha cac so a, b, c tu ban phim')
a = 2
b = 3
c = 1
# a = float(input('nhap a = '))
# b = float(input('nhap b = '))
# c = float(input('nhap c = '))
delta = b*b - 4*a*c
if a == 0:
    print('day la phuong trinh bac nhat')
else:
    if delta > 0:
        print('phuong trinh co 2 nghiem phan biet')
        print('x1 = ', (- b + sqrt(delta)) / (2*a))
        print('x2 = ', (- b - sqrt(delta)) / (2*a))
    elif delta == 0:
        print('phuong trinh co nghiem kep x = ' - b/(2*a))
    elif delta < 0:
        print('phuong trinh da cho vo nghiem ')

# thực hành chuỗi
#  [i]
s = "abcd"
print(id(s[0]))
print(id(a))
print(type(s[0]))
# [n:m]
str1 = "bui minh tuan"
print(str1[1:7])
#  +
str1 = "bui " + " minh tuan"
print(str1)

str1 = "ab"
print(str1*3)

# các hàm xử lý chuỗi
s = 55
z = repr(s)
'tạo một đối tượng mới thuộc lớp str1'
print(s)
print('kieu', type(s))
print(id(s))
print(z)
print('kieu', type(z))
print(id(z))

s = [a, b, 5, 'vip']
z = repr(s)
print("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvip", s)
print('kieu', type(s))
print(id(s))
print(z)
print('kieu', type(z))
print(id(z))

# các hàm và phương thức xử lý chuỗi
s = "bui minh tuan"
print(choice(s))
z = s.center(20, "*")
print(z)
s = "bui minh tuan"
print(choice(s))
z = s.ljust(20, "*")
print(z)
s = "bui minh tuan"
print(choice(s))
z = s.rjust(20, "*")
print(z)

s = "tuan bui minh"
print(s.capitalize())
s = "tuan bui minh"
print(s.lower())
s = "tuan bui minh"
print(s.upper())
s = "tuan bui minh"
print(s.swapcase())
s = "tuan bui minh"
print(s.title())

# các hàm tiếp theo
s = "bui minh tuan"
print(s.count('n'))
'dem so lan xuat hien'
print(s.count('n', 0, 14))
print(s.count('n', 0))

s = "bui minh tuan"
print(s.find('n'))
'tìm kiếm và trả về chỉ số của lần xuất hiẹn đầu tiên'
s = "bui minh tuan"
print(s.find('n', 0, 5))
s = "bui minh tuan"
print(s.find('n', 0))

s = "bui minh tuan"
# print(s.index('n',0,5)) ; 'nếu tìm không thấy thì báo lỗi'

s = "bui minh tuan"
print(s.rfind('n', 0))
'tim tu ben phai trươc'
s = "bui minh tuan"
print(s.rindex('n', 0))
'tim tu ben phai trươc'

s = "bui minh tuan"
print(s.startswith('tuan'))
'bắt đầu bằng'
s = "bui minh tuan"
print(s.endswith('tuan'))
'kết thúc bằng'

s = "++++"
s1 = ["tuan", "huy", "tai"]
m = s.join(s1)
print("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", m)
print(type(m))
print(id(m))

s = "bui minh tuan"
print(len(s))

s = "bui minh tuan bui minh tai bui minh dung"
print(s.replace("minh", "cao"))
'thay thế chuỗi cũ bằng chuỗi mới '

s = "---bui minh tuan-----"
print(s)
print(s.strip('-'))

# các phương thức xử lý chuỗi
s = " bui minh tuan"
m = s.split(" ", 2)
print(m)
c = s.split(" ")
print(c)
print(type(c))

s = """hom nay troi mua to
khong the ra ngoai mua kem
o nha an banh my"""
"3 dấu nháy kep cho phép xuong dong"

m = s.splitlines(False)
print(m)
m = s.splitlines(True)
print(m)

s = "bui"
m = s.zfill(10)
print(m)

s = "bui \t minh tuan"
m = s.expandtabs(10)
print(m)

s = "bui"
m = s.encode("utf-16")
z = m.decode("utf-16")
print(m)
print("sau khi ma hoa =", z)

s = "bui minh tuan"
m = max(s)
z = min(s)
print(m)
print(z)

arr = [1, 3, 7, 4, 5, 3, 9]
print(max(arr))
print(min(arr))

s = "buiminhtuan"
z = "dang cap qua 1"
print(s.isalpha())
' kiem tra xem phai ky tu alphabetic khoong'
print(z.isalpha())

s = "1234"
print(s.isdecimal())
' kiem tra xem phai so thap phan khong 0 - 9'
s = "12 34"
print(s.isdecimal())

s = "1234"
print(s.isdigit())
' kiem tra xem phai so thap phan khong 0 - 9 thêm số có vòng tròn'

s = "1/2"
print(s.isnumeric())

s = "bui"
print("isalnum = ", s.isalnum())

s = "bui minh tuan"
print("khong co chu hoa", s.islower())
s = "BUI"
print("khong co chu thuong", s.isupper())

s = "                  "
print("toan bo la space", s.isspace())

s = "La Dang Title 123@#"
print("Viet hoa dau moi tu , title", s.istitle())

# toán tử %
x = 12.33
print("x co kieu ", type(x))

y = str(int(x))
print(y)
print(type(y))
print("1 = ", id(y))

x = 12.333
y = "%i" % (x)
print(y)
print(type(y))
print("2 = ", id(y))

x = 12.333
y = "%d" % (x)
print(y)
print(type(y))
print("3 = ", id(y))

x = 12.333
y = "%u" % (x)
print(y)
print(type(y))
print("4 = ", id(y))

x = 12.333
y = "%f" % (x)
print(y)
print(type(y))
print("f = ", id(y))

x = 12.333
y = "%e" % (x)
print(y)
print(type(y))
print("e = ", id(y))

x = 12
y = "%x" % (x)
print(y)
print(type(y))
print("x = ", id(y))

hoten = "bui minh tuan"
sdt = 396104572

x = "ong " + hoten + " co so dien thoai la %u" % (sdt)
print(x)
x = "ong %s co so dien thoai la %u" % (hoten, sdt)
print(x)


# kiểu danh sách list
v = [12, 4, 5, 7, 8]
x = ["a", "b", 4, 6, 9, v]
print("x = ", x)
print("x = ", id(x))
print("x = ", type(x))

print("phan tu thu 3 cua list x =", x[3])
print(
    "truy cap phan tu co chi so 2 trong mang con v cua mang cha x =", x[5][2])
print(x[2:5])

print("so luong phan tu trong list x = ", len(x))

x = "bui minh tuan"
print(type(x))
print("chuyen mot chuoi str ve list", list(x))
x = (3, 5, 6, 7, "bui")
print(type(x))
print("chuyen mot tap hop tuple ve list", list(x))
x = {2, 4, 5, 6, 7, "ao", "ca"}
print(type(x))
print("chuyen mot set ve list", list(x))
x = [2, 4, 5, 67, "bui minh", [22, 33, 44]]
print(type(x))
print("chuyen mot list ve mot list", list(x))

# toán tử và phương thức của list
x = [2, 3, 6, 7, 4, 3, 78]
z = 6 in x
print("6 co nam trong = x không ", z)
for i in x:
    print(id(i))
    print(i)

# xóa trong list
x = [2, 3, 6, 7, 4, 3, 78]
print("gia tri phan tu thu 3 = ", x[3])
print(id(x))
print("xoa phan tu thu 3")
del x[3]
print("gia tri phan tu thu 3 = ", x[3])
print(id(x))

x = [2, 3, 6, 7, 4, 3, 78]
print(id(x))
print("xoa phan tu co gia tri 7")
x.remove(7)
print(id(x))

x = [3, 4, 5, 6, 7, 8, "ch"]
y = ["voi", "co", "nhim", "vet"]
print(x)
print(id(x))

x.extend(y)
print("x =", x)
print(id(x))

x = [3, 4, 5, 6, 7, 8, "ch"]
y = {"voi", "co", "nhim", "vet"}

x.extend(y)
"trường hợp này không dùng được dấu cộng mà phải dùng extend"
print(x)
print(id(x))

x = [3, 4, 5, 6, 7, 8, "ch"]
x.append(5)
print(x)

x = [3, 8, 5, 6, 7, 4, 1, 122]
x.sort(key=None, reverse=True)
print(x)

x = [3, 8, 5, 6, 7, 4, 1, 122]
print(x)
print(id(x))

x.clear()

print(x)
print(id(x))

x = [3, 8, 5, 6, 7, 4, 1, 122, 4, "t"]
print(x)
print(id(x))
z = x.copy()
print(z)
print(id(z))

x = [3, 8, 5, 6, 7, 4, 1, 122, 6, 4, "t"]
# z = x.index(6,0,5)
z = x.index(6, 5)
print(z)

print(x.count(6))

# bài toán tìm số chẵn lẽ từ a đến b
# ketqua = []
# a = int(input("nhap vao a"))
# b = int(input("nhap vao b"))
# if (a > b):
#     print("a khong the lon hon b")
# elif (a == b):
#     print("chi co 1 phan tu")
#     if (a % 2 == 0):
#         print("la so chan", i)
#     else:
#         print("la so le,", i)
# elif (a < b):
#     for i in range(a, b):
#         if (i % 2 == 0):
#             print("la so chan ", i)
#             ketqua.append(str(i))
#         else:
#             print("la so le ", i)
# s1 = ","
# s = s1.join(ketqua)
# print("cac so chan tu %s den %s " % (a, b), s)

# lưu đồ thuật toán, tính hợp lệ mật khẩu
# mk = input("nhap mat khau cua ban = ")
# if len(mk) < 6:
#     print("mk phai dai hơn hoac bang 6 ky tu ")
# else:
#     if len(mk) > 12:
#         print("mk khong duoc nhieu hon 12 ky tu ")
#     else:
#         testLower = False
#         for i in mk:
#             if i.islower():
#                 testLower = True
#                 break
#         if testLower == False:
#             print("mat khau it nhat phai co 1 chu cai thuog")
#         else:
#             testUpper = False
#             for i in mk:
#                 if i.isupper():
#                     testUpper = True
#                     break
#             if testUpper == False:
#                 print("mat khau it nhat phai co 1 chu cai Hoa")
#             else:
#                 testNumber = False
#                 for i in mk:
#                     if i.isdecimal():
#                         testNumber = True
#                         break
#                 if testNumber == False:
#                     print("mat khau it nhat phai co 1 chu so")
#                 else:
#                     testspecial = False
#                     for i in mk:
#                         if i.isalpha() == False :
#                             if i.isdecimal() == False :
#                                 if i == " " :
#                                     print("dau cach khong duoc xuat hien trong mk")
#                                 else:
#                                     testspecial = True
#                                     break
#                     if testspecial == False:
#                         print("mat khau nen chua 1 ky tu dac biet (KHONG PHAI LA DAU CACH)")
#                     else:
#                         print("mat khau duoc dat thanh cong")

# CODE 2 , KIỂM TRA TÍNH HỢP LỆ CỦA MẬT KHẨU
# nhap dau vao
# mk = input("nhap mk hop le ")
# kt = False
# dk1 = False
# dk2 = False

# # do dai toi thi 6 k tu
# if len(mk) >= 6:
#     # do dai toi da 12 ky tu
#     if len(mk) <= 12:
#         # trong mat khau phai co it nhat 1 ky tu thuong
#         if mk.isupper() == False:
#             # trong mat khau phai co ky tu in HOA
#             if mk.islower() == False:
#                 # trong mat khau phai co it nhat 1 chu so
#                 for i in mk:
#                     if i.isdecimal() == True:
#                         dk1 = True
#                     if i == "#" or i == "#" or i == "$":
#                         dk2 = True
#                 if dk1 and dk2:
#                     kt = True
# # kiểm tra mật khẩu hợp lệ
# if kt:
#     print("mat khau hop le")
# else:
#     print("mat khau khong hop le")

# Tuple | phuong thuc Tuple | len , man , min, count()
x = (3, 4, 7, 8, 2, 6, 1)
y = ("va", "la", "te")
print(x)
print(type(x))

print(x[3])
print(x[0:4])

a = x + y
print(a)
print(x*2)

b = 6 in x
print("6 co nam trong tuple khong ", b)
for i in x:
    print(i)

print(min(x))
print(x.count(6))
print(x.index(3, 0, 5))
# del x ; "xoa tat ca tuple thì dc chứ không thể xóa từng phần tử"

tp = ("a",)
"them dau phay vao moi ra kieu tuple"

# mutable vaf immutable
x = [2, 3, 4, "a"]
y = [2, 3, 4, "a"]
z = x == y
" so sanh gia tri voi gia tri"
print(z)
z = x is y
" so sanh ca gia tri va dia chi"
print(z)

x = (2, 3, 4, "a")
y = (2, 3, 4, "a")
z = x == y
" so sanh gia tri voi gia tri"
print(z)
z = x is y
" so sanh ca gia tri va dia chi"
print(z)


# hàm hash , hashable , unhashable
# hashable = str  , tuple , range , int , decimal, float , complex , bool, byte  => immutable
# unhashable = list , dict , set, bytearray => unhashable object
x = "abc"
z = hash(x)
print(z)

x = "abuefoawefouic"
z = hash(x)
print(z)

x = (3, 5, 6, 7)
z = hash(x)
print(z)

x = range(200)
z = hash(x)
print(z)

#  kiểu dữ liệu set (không có tính thứ tự)
x = [4, 2, "a"]
y = [4, 2, "a"]
z = (x == y)
print(z)

x = [4, 2, "a"]
y = [2, 4, "a"]
z = (x == y)
print(z)

x = {4, 2, "a"}
y = {4, 2, "a"}
z = (x == y)
print("so sach kieu set voi nhau ", z)

x = {4, 2, "a"}
y = {2, 4, "a"}
z = (x == y)
print("so sach kieu set voi nhau ", z)

x = [2, 3, 4, "a"]
y2 = {"ford", "ducati"}
y = ["BVM", "Lusxus", x, y2]
print(y)

y = (3, 7, 66)
x = {3, 4, 5, "a", y}
for i in x:
    print(i)


# các phương thức của set (set cỉ chứa immutable nhưng bản thân set lại là mutable)
x = ["a", 4, 5, 5]
y = set(x)
print("set() dua cac kieu du lieu khac ve tyoe set", y)
print(type(y))

x = {2, 3, 54, 7, 54}
print(id(x))
x.add("b")
print(id(x))

x = {2, 3, 54, "bb"}
y = {99, 3, 2, 111}
x.update(y)
print(x)
print(id(x))

x = {2, 3, 54, "bb"}
y = {99, 3, 2, 111}
m = x.union(y)
"union thì phải cùng kiểu"
print(m)
print(id(x))

# muốn xóa thì phải kiểm tra sự tồn tại bằng (in)
x = {2, 3, 54, "bb"}
x.remove(3)
'nếu không có giá trị 3 thì báo lỗi'
print(x)
print(id(x))

x = {2, 3, 54, "bb"}
x.discard(54)
'neu không tim thấy giá trj 3 thi thôi'
print(x)
print(id(x))

kk = {4, 5, 6, 7}
# del kk  xóa biến
#  clear() dùng để xóa vùng nhớ
kk.clear()
print(kk)

x = {3, 54, 6, 7, 4}

kk = x.copy()
print(id(x))
print(kk)
print(id(kk))

x = {3, 4, 44, 6, 7}
m = x.pop()
'vì set khong co thu tu nen pop trong set là lấy ngẫu nhiên, list thì lấy cuối cùng'

x = {3, 4, 44, 6, 7}
print(max(x))

x = [2, 3, 4, 62, 2, 34, 5, 55]
tt = sorted(x)
print(tt)

# các phép toán với tập hợp
a = {2, 3, 4, 5}
b = {1, 3, 5, 9}
# c= a & b
c = a.intersection(b)
print(c)

a = {2, 3, 4, 5}
b = {1, 3, 5, 9}
# c = a | b
c = a.union(b)
print(c)

a = {2, 3, 4, 5}
b = {1, 3, 5, 9}
c = a - b
c = a.difference(b)
print(c)

a = {2, 3, 4, 5}
b = {1, 3, 5, 9}
c = a ^ b
c = a.symmetric_difference(b)
print("symmetric_difference", c)


# tiêu diệt kẻ 2 lòng

a = {"Đao", "hong", "Hoa", "hue"}
b = {"Cuc", "hong", "Hoa", "Buoi"}

print(a)
print(b)
a.difference_update(b)
print("làm viec cho ca a , b", a)
print(b)


a = {"Đao", "hong", "Hoa", "hue"}
b = {"Cuc", "hong", "Hoa", "Buoi"}

print(a)
print(b)
a.intersection_update(b)
print("chi lam viec cho a", a)
print(b)

a = {"Đao", "hong", "Hoa", "hue"}
b = {"Cuc", "hong", "Hoa", "Buoi"}
a.symmetric_difference_update(b)
print("con rieng a + b", a)
print(b)


a = {"Đao", "hong", "Hoa", "hue"}
b = {"Cuc", "hong", "Hoa", "Buoi"}

c = a.isdisjoint(b)
"có con chung"
"nếu trùng phần tử thì false, không thì true"
print(c)

a = {"Đao", "hong", "Hoa", "hue"}
b = {"Cuc", "hong", "Hoa", "Buoi"}

c = a.issubset(b)
"nếu a thuộc b thì true không thì false"
print(c)


a = {"Đao", "hong", "Hoa", "hue"}
b = {"Cuc", "hong", "Hoa", "Buoi", "quan 9", "quan 10", "quan 1"}

c = b.issuperset(a)
"b co bao gom a"
print(c)

# kiểu dữ liệu dict
d = {0: "dao", 1: "buoi", 3: "hong", 4: "dao"}
x = d[1]
print(d)
print(type(d))
print("x = ", x)
print(type(x))

d = {"ngay": "15/09/2022", 0: "bun cha ha noi", "vang": "indonesia"}

print(d)
print(type(d))


# các phương thức của dict
d = {"ngay": "15/09/2022", 0: "bun cha ha noi", "vang": "indonesia"}
print(d[0])
z = d.get(1, "khong ton tai")
print(z)

d = {"ngay": "15/09/2022", 0: "bun cha ha noi", "vang": "indonesia"}
z = "vang" in d
" kiểm tra sự tồn tại"
print(z)

for i in d:
    print(i, " : ", d[i])

# các phương thức của dict
d = {"ngay": "15/09/2022", 0: "bun cha ha noi", "vang": "indonesia"}
print(d)
print(id(d))
del d["ngay"]
print(d)
print(id(d))

d = {"ngay": "15/09/2022", 0: "bun cha ha noi", "vang": "indonesia"}
del d
"xóa biến d"


d = {"ngay": "15/09/2022", 0: "bun cha ha noi", "vang": "indonesia"}
d.clear()
print(d)
"xóa vùng nhớ"

d = {"ngay": "15/09/2022", 0: "bun cha ha noi", "vang": "indonesia"}
h = d.copy()
"copy sang một ô nhớ mới "

print(id(d))
print(id(h))

d = {"ngay": "15/09/2022", 0: "bun cha ha noi", "vang": "indonesia"}

z = d.pop("ngay")
"xóa và lấy giá trị của key"
print("d = ", d)
print("z = ", z)

d = {"ngay": "15/09/2022", 0: "bun cha ha noi", "vang": "indonesia"}

z = d.popitem()
"trả về key và value kiểu tuple"
print("d = ", d)
print("z = ", z)

d = {"ngay": "15/09/2022", 0: "bun cha ha noi", "vang": "indonesia"}
print(len(d))

d = {0: "15/09/2022", 1: "bun cha ha noi", 2: "indonesia"}
print(max(d))

d = {0: "15/09/2022", 1: "bun cha ha noi", 2: "indonesia"}
d[2] = "trieu tien"
print(d)

d = {0: "15/09/2022", 1: "bun cha ha noi", 2: "indonesia"}
d[3] = "american"
print(d)

d = {0: "15/09/2022", 1: "bun cha ha noi", 2: "indonesia"}
d.setdefault(4, "japan")
print(d)

# các phương thức của dict
s = [(0, "a"), (1, "b"), (2, "c"), (3, "d")]
d = dict(s)
print(s)
print(type(s))
print(len(s))
print("d = ", d)
print(type(d))


"set: {}, dict: {}"
's : list ->dict  key:value dung (), {}, []'
"s: set -> dict key:value dung ()"
"s: tuple -> dict key:value dung (), [], "
s = [[0, "g"], [1, "h"], [2, "y"], [3, "k"]]
d = dict(s)
print(s)
print(type(s))
print(len(s))
print("d = ", d)
print(type(d))


d = {0: "15/09/2022", 1: "bun cha ha noi", 2: "indonesia"}
z = d.keys()

print(z)
print(type(z))

d = {0: "15/09/2022", 1: "bun cha ha noi", 2: "indonesia"}
z = d.values()

print(z)
print(type(z))

d = {0: "15/09/2022", 1: "bun cha ha noi", 2: "indonesia"}
z = d.items()

print(z)
print(type(z))

s = {"giam doc": "hong", "bao ve": "hong", "thu ky": "hong"}
d = dict.fromkeys(s, "dao")
d1 = dict.fromkeys(s, "linh")
d2 = dict.fromkeys(s)
d3 = dict.fromkeys(s, "dang cho bo nhiem")

print(d)
print(d1)
print(d2)
print(d3)

s = ["giam doc", "bao ve", "thu ky"]
l = {"lam ngao thien"}
l.add("my hau vuong")
l.remove("lam ngao thien")
s.append("lao cong")
d = dict.fromkeys(s, l)
print(d)

#  date trong python
ticks = time.time()
nowTime = time.localtime()
print(ticks)
print(nowTime)
print(type(nowTime))
print(nowTime[2])
