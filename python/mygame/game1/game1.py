import pygame  # thư viện
import os  # làm việc với tập tin và thư mục
import random
pygame.init()  # khởi tạo game
sourceFileDir = os.path.dirname(os.path.abspath(__file__))
# cửa sổ game
screen = pygame.display.set_mode((432, 768))
# các biến khởi tạo trong game
# dều kiện chơi game
game_play = True
p = 0.1  # hằng số , trọng lực
# tọa độ y của bird
bird_y = 0
# tọa độ x , y của ông
pipe_x1, pipe_y1 = 432, random.randrange(2, 6, 1)*100
pipe_x2, pipe_y2 = 678, -1*random.randrange(2, 4, 1)*100
# điểm ban đầu
score = 0
# điểm cao nhất hiện tại
hscore = 0
# sàn chạy
fl_x = 0
# font chữ trong game
game_font = pygame.font.Font(os.path.join(
    sourceFileDir, 'font/04B_19.TTF'), 20)  # lấy phong chữ


def score_view():
    if game_play == True:
        # điểm của bạn
        score_f = game_font.render(
            f'Your score {str(int(score))}', True, (255, 255, 255))  # đưa vào màn hình
        score_hcn = score_f.get_rect(center=(216, 90))
        screen.blit(score_f, score_hcn)
        # điểm cao nhất
        hscore_f = game_font.render(
            f'high score {str(int(hscore))}', True, (255, 255, 255))   # đưa vào màn hình
        hscore_hcn = hscore_f.get_rect(center=(70, 20))
        screen.blit(hscore_f, hscore_hcn)
    else:
        # điểm của bạn
        score_f = game_font.render(
            f'Your score {str(int(score))}', True, (255, 255, 255))   # đưa vào màn hình
        score_hcn = score_f.get_rect(center=(216, 90))
        screen.blit(score_f, score_hcn)
        # điểm cao nhất
        hscore_f = game_font.render(
            f'high score {str(int(hscore))}', True, (255, 255, 255))   # đưa vào màn hình
        hscore_hcn = hscore_f.get_rect(center=(70, 20))
        screen.blit(hscore_f, hscore_hcn)


# tiêu đề và icon
pygame.display.set_caption("game 1")
icon = pygame.image.load(os.path.join(
    sourceFileDir, 'image/yellowbird-upflap.png'))
pygame.display.set_icon(icon)
# /////////////////// hình ảnh
# nền game
bg = pygame.image.load(os.path.join(
    sourceFileDir, 'image/background-night.png'))
bg = pygame.transform.scale2x(bg)
# sàn game
fl = pygame.image.load(os.path.join(sourceFileDir, 'image/floor.png'))
fl = pygame.transform.scale(fl, (432, 224))
# ống chạy
# vật cản ống
pipe = pygame.image.load(os.path.join(sourceFileDir, 'image/pipe-green.png'))
pipe1 = pygame.transform.scale(pipe, (82, 506))
pipe2 = pygame.transform.rotozoom(pipe, 180, 2)
# bird
bird = pygame.image.load(os.path.join(
    sourceFileDir, 'image/yellowbird-midflap.png'))
bird = pygame.transform.scale2x(bird)
# biến bird thành đối tượng hình chữ nhật
bird_hcn = bird.get_rect(center=(100, 334))  # lấy hình chữ nhật chứa bird
# màn hinh game over
screen_kt = pygame.image.load(os.path.join(
    sourceFileDir, 'image/message.png'))
screen_kt = pygame.transform.scale2x(screen_kt)
# biến bird thành đối tượng hình chữ nhật
screen_kt_hcn = screen_kt.get_rect(
    center=(216, 334))  # lấy hình chữ nhật chứa bird

# /////////////////// âm thanh
nhac_nen = pygame.mixer.Sound(os.path.join(
    sourceFileDir, 'sound/nhac_nen.wav'))
bang_thong_bao = pygame.mixer.Sound(os.path.join(
    sourceFileDir, 'sound/bangthongbao.wav'))
chet = pygame.mixer.Sound(os.path.join(
    sourceFileDir, 'sound/chet.wav'))
dam_dau = pygame.mixer.Sound(os.path.join(
    sourceFileDir, 'sound/dam_dau.wav'))
ghi_diem = pygame.mixer.Sound(os.path.join(
    sourceFileDir, 'sound/ghi_diem.wav'))
bay = pygame.mixer.Sound(os.path.join(
    sourceFileDir, 'sound/bay.wav'))


def check_vc():
    # hàm kiểm tra va chạm với mặt đất và bầu trời , ống
    if bird_hcn.bottom >= 668 or bird_hcn.top <= -50:
        pygame.mixer.Sound.play(chet)
        return False
    if bird_hcn.colliderect(pipe_hcn1) or bird_hcn.colliderect(pipe_hcn2):
        pygame.mixer.Sound.play(dam_dau)
        return False
    else:
        return True


# vòng lặp xử lý game
running = True
while running:
    for event in pygame.event.get():  # nhận sự kiện từ hàng đợi
        # event.type người dùng đang làm gì
        if event.type == pygame.QUIT:  # người dùng đang nhấn nút thoát
            running = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE and game_play == True:  # đang chơi
                bird_y = -3
                pygame.mixer.Sound.play(bay)
            if event.key == pygame.K_SPACE and game_play == False:  # người dung chơi lại
                pygame.mixer.Sound.play(bang_thong_bao)
                game_play = True
                bird_y = 0  # cập nhật trọng lực
                bird_hcn.center = (100, 334)  # cập nhật lại tọa độ bird
                score = 0  # cập nhật lại điểm
                # cập nhật lại tọa độ các ống
                pipe_x1, pipe_y1 = 432, random.randrange(2, 6, 1)*100
                pipe_x2, pipe_y2 = 678, -1*random.randrange(2, 4, 1)*100
    screen.blit(bg, (0, 0))  # đưa bg vào cửa sổ
    pipe_x1 -= 1
    pipe_hcn1 = screen.blit(pipe1, (pipe_x1, pipe_y1))
    if pipe_x1 == -82:
        pipe_x1 = 432
        pipe_y1 = random.randrange(2, 6, 1)*100
    pipe_x2 -= 1
    pipe_hcn2 = screen.blit(pipe2, (pipe_x2, pipe_y2))
    if pipe_x2 == -82:
        pipe_x2 = 432
        pipe_y2 = -1*random.randrange(2, 4, 1)*100
    fl_x -= 1
    screen.blit(fl, (fl_x, 600))  # đưa sàn vào cửa sổ
    screen.blit(fl, (fl_x+432, 600))  # đưa sàn vào cửa sổ
    if fl_x == -432:
        fl_x = 0
        score += 1
    if game_play == True:
        # đưa bird vào
        screen.blit(bird, bird_hcn)
        bird_y += p  # cho tọa độ y tăng lên
        bird_hcn.centery += bird_y  # cập nhật cho đối tượng bird
        if score > hscore:
            hscore = score
        score_view()
        game_play = check_vc()
    else:
        screen.blit(screen_kt, screen_kt_hcn)
        score_view()
    pygame.display.update()  # cập nhật các phần cho màn hình hiển thị
