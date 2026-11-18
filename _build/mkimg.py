from PIL import Image, ImageDraw, ImageFont, ImageFilter
import random, math, os
random.seed(7)
OUT='images/web'
os.makedirs(OUT,exist_ok=True)
def save(im,name):
    if not os.path.exists(f'{OUT}/{name}.webp'):
        im.save(f'{OUT}/{name}.webp','WEBP',quality=82)
def grad(w,h,top,bot):
    im=Image.new('RGB',(w,h)); d=ImageDraw.Draw(im)
    for y in range(h):
        t=y/(h-1); d.line([(0,y),(w,y)],fill=tuple(int(top[i]+(bot[i]-top[i])*t) for i in range(3)))
    return im
def hills(d,w,h,color,base,amp,seed):
    r=random.Random(seed); pts=[(0,h)]
    ph=r.random()*6
    for x in range(0,w+20,20):
        pts.append((x,base+amp*math.sin(x/w*5+ph)+amp*.5*math.sin(x/w*11+ph*2)))
    pts.append((w,h)); d.polygon(pts,fill=color)
def banner(name,top,bot,hill1,hill2,orb,orbpos,extra=None,w=1600,h=600):
    im=grad(w,h,top,bot); d=ImageDraw.Draw(im,'RGBA')
    for i in range(70):
        x,y=random.randint(0,w),random.randint(0,int(h*.5)); d.ellipse([x,y,x+2,y+2],fill=(255,255,255,random.randint(60,160)))
    ox,oy=orbpos; d.ellipse([ox-70,oy-70,ox+70,oy+70],fill=orb+(230,))
    d.ellipse([ox-120,oy-120,ox+120,oy+120],fill=orb+(45,))
    hills(d,w,h,hill1,int(h*.66),40,1); hills(d,w,h,hill2,int(h*.8),30,2)
    if extra: extra(d,w,h)
    # fox silhouette-ish triangles + tunnel
    return im
def farm(d,w,h):
    for x in (1050,1250,1380):
        d.rectangle([x,int(h*.72),x+90,int(h*.72)+60],fill=(40,30,60,255)); d.polygon([(x-8,int(h*.72)),(x+45,int(h*.72)-40),(x+98,int(h*.72))],fill=(30,22,50,255))
        d.rectangle([x+35,int(h*.72)+20,x+52,int(h*.72)+38],fill=(255,200,90,255))
def tunnel(d,w,h):
    d.rectangle([0,int(h*.78),w,h],fill=(58,36,22,255))
    for i in range(6):
        d.arc([100+i*230,int(h*.72),300+i*230,int(h*.98)],180,360,fill=(255,190,90,200),width=6)
def feast(d,w,h):
    d.rectangle([0,int(h*.78),w,h],fill=(70,42,24,255))
    d.rectangle([420,int(h*.72),1180,int(h*.78)],fill=(150,90,40,255))
    for x in range(460,1160,70): d.ellipse([x,int(h*.66),x+50,int(h*.72)],fill=(240,170,70,255))
W={
 'week1-banner':((28,26,80),(240,140,70),(45,40,90),(30,26,60),(255,214,120),(1200,300),farm),
 'week2-banner':((10,12,44),(60,50,110),(30,28,70),(18,16,44),(235,235,255),(400,170),None),
 'week3-banner':((70,40,60),(240,150,70),(80,50,50),(50,34,40),(255,190,120),(800,330),farm),
 'week4-banner':((50,60,90),(150,150,170),(70,70,90),(45,45,65),(230,230,240),(1300,180),farm),
 'week5-banner':((40,26,20),(120,70,36),(70,44,26),(40,26,18),(255,190,90),(800,250),tunnel),
 'week6-banner':((60,34,24),(190,110,50),(96,60,30),(60,38,22),(255,205,110),(300,260),tunnel),
 'week7-banner':((44,30,60),(220,150,60),(80,50,40),(50,34,30),(255,210,110),(1250,240),feast),
 'week8-banner':((26,18,32),(120,70,40),(58,34,28),(34,22,20),(255,170,70),(800,300),tunnel),
 'week9-banner':((28,24,74),(250,160,60),(70,44,60),(40,30,50),(255,220,120),(800,250),feast),
 'week10-banner':((28,24,74),(255,170,70),(90,60,60),(50,36,50),(255,225,130),(1200,220),feast),
 'final-project-banner':((28,24,74),(255,180,80),(90,60,60),(50,36,50),(255,225,130),(400,230),feast),
 'hero-banner':((20,22,70),(255,150,60),(60,44,80),(34,28,54),(255,215,110),(1250,300),farm),
}
for n,(t,b,h1,h2,o,op,ex) in W.items(): save(banner(n,t,b,h1,h2,o,op,ex),n)
# icons
def icon(name,color,draw):
    im=Image.new('RGBA',(512,512),(0,0,0,0)); d=ImageDraw.Draw(im)
    d.ellipse([16,16,496,496],fill=color+(255,)); d.ellipse([16,16,496,496],outline=(255,255,255,255),width=10)
    draw(d); save(im,name)
F=lambda s:ImageFont.load_default(size=s)
wh=(255,255,255,255)
def book(d): d.polygon([(256,170),(110,140),(110,360),(256,390)],fill=wh); d.polygon([(256,170),(402,140),(402,360),(256,390)],fill=(255,240,220,255))
def group(d):
    for x,y in ((190,190),(322,190),(190,322),(322,322)): d.ellipse([x-46,y-46,x+46,y+46],fill=wh)
def check(d): d.line([(140,270),(225,355),(380,170)],fill=wh,width=44,joint='curve')
def poster(d): d.rectangle([150,110,362,400],fill=wh); [d.line([(180,y),(332,y)],fill=(210,96,26,255),width=14) for y in (170,230,290)]
def comic(d): [d.rectangle([x,y,x+90,y+90],fill=wh) for x,y in ((120,130),(250,130),(120,260),(250,260))]
def drama(d): d.ellipse([90,150,250,330],fill=wh); d.ellipse([262,180,422,360],fill=(255,230,200,255)); [d.ellipse([x,y,x+22,y+22],fill=(60,40,30,255)) for x,y in ((130,210),(190,210),(300,240),(360,240))]
def quill(d): d.polygon([(130,390),(360,110),(400,150),(170,410)],fill=wh); d.line([(110,410),(180,410)],fill=wh,width=16)
def stack(d): [d.rectangle([130+i*14,150+i*40,380+i*14,210+i*40],fill=wh,outline=(210,96,26,255),width=6) for i in range(4)]
def ques(d): d.text((256,270),'?',font=F(300),fill=wh,anchor='mm')
def paws(d): [d.ellipse([x,y,x+60,y+80],fill=wh) for x,y in ((150,300),(260,230),(320,330),(190,180))]
def magn(d): d.ellipse([120,110,320,310],outline=wh,width=34); d.line([(300,290),(400,400)],fill=wh,width=44)
def plant(d): d.line([(256,400),(256,180)],fill=wh,width=26); [d.ellipse(b,fill=wh) for b in ([170,230,256,290],[256,160,350,230],[176,320,256,380])]
def stage(d): d.polygon([(150,360),(362,360),(330,300),(182,300)],fill=wh); d.polygon([(256,110),(200,290),(312,290)],fill=(255,235,150,255))
def cal(d): d.rectangle([120,140,392,390],fill=wh); d.rectangle([120,140,392,200],fill=(60,40,110,255)); [d.rectangle([150+x*70,230+y*60,190+x*70,265+y*60],fill=(210,96,26,255)) for x in range(3) for y in range(2)]
for n,c,f in [('icon-teacher-read',(210,96,26),book),('icon-group-read',(60,90,140),group),('icon-quiz',(95,122,46),check),('icon-poster',(138,106,75),poster),('icon-comic',(95,122,46),comic),('icon-drama',(210,96,26),drama),('icon-journal',(138,106,75),quill),('icon-print-all',(95,122,46),stack),('icon-leadin',(210,96,26),ques),('icon-goaway',(138,106,75),paws),('icon-comprehension',(95,122,46),magn),('icon-rubric',(210,96,26),plant),('icon-presentation',(210,96,26),stage),('icon-schedule',(60,90,140),cal)]: icon(n,c,f)
# logo + badges
def foxface(d,cx,cy,s,fill=(230,110,30,255)):
    d.polygon([(cx-s,cy-s*.2),(cx-s*.85,cy-s*1.15),(cx-s*.25,cy-s*.55)],fill=fill)
    d.polygon([(cx+s,cy-s*.2),(cx+s*.85,cy-s*1.15),(cx+s*.25,cy-s*.55)],fill=fill)
    d.polygon([(cx-s,cy-s*.4),(cx+s,cy-s*.4),(cx,cy+s*1.1)],fill=fill)
    d.polygon([(cx-s*.5,cy+s*.35),(cx+s*.5,cy+s*.35),(cx,cy+s*1.1)],fill=(255,245,230,255))
    d.ellipse([cx-s*.42,cy-s*.05,cx-s*.22,cy+s*.15],fill=(40,24,20,255)); d.ellipse([cx+s*.22,cy-s*.05,cx+s*.42,cy+s*.15],fill=(40,24,20,255))
    d.ellipse([cx-s*.1,cy+s*.85,cx+s*.1,cy+s*1.05],fill=(40,24,20,255))
im=Image.new('RGBA',(512,512),(0,0,0,0)); d=ImageDraw.Draw(im); foxface(d,256,240,190); save(im,'logo-fox')
def badge(name,ring,inner,draw):
    im=Image.new('RGBA',(512,512),(0,0,0,0)); d=ImageDraw.Draw(im)
    d.ellipse([10,10,502,502],fill=ring+(255,)); d.ellipse([40,40,472,472],fill=inner+(255,)); d.ellipse([60,60,452,452],outline=(255,255,255,200),width=6); draw(d); save(im,name)
def star(d):
    pts=[]
    for i in range(10):
        r=150 if i%2==0 else 65; a=-math.pi/2+i*math.pi/5; pts.append((256+r*math.cos(a),256+r*math.sin(a)))
    d.polygon(pts,fill=(255,225,120,255))
badge('badge-community',(247,192,74),(210,96,26),lambda d:foxface(d,256,250,120,(255,235,200,255)))
badge('badge-quiz-champion',(247,192,74),(95,122,46),star)
badge('badge-reading-streak',(247,192,74),(60,50,130),lambda d:[foxface(d,256,250,110,(255,180,90,255))])
# certificate border, feast circle, nav texture
c=Image.new('RGB',(1600,1200),(253,246,230)); d=ImageDraw.Draw(c)
for i,(col,wd) in enumerate([((210,96,26),18),((247,192,74),6),((60,50,130),4)]):
    m=24+i*26; d.rectangle([m,m,1600-m,1200-m],outline=col,width=wd)
for x,y in ((60,60),(1540,60),(60,1140),(1540,1140)): d.ellipse([x-30,y-30,x+30,y+30],fill=(210,96,26))
save(c,'certificate-border')
im=grad(1600,900,(28,24,74),(255,170,70)); d=ImageDraw.Draw(im,'RGBA'); d.ellipse([560,180,1040,660],fill=(255,220,120,70)); d.ellipse([640,260,960,580],fill=(255,220,120,120)); hills(d,1600,900,(50,34,50),700,40,5); save(im,'feast-circle')
n=Image.new('RGB',(400,400),(251,243,230)); d=ImageDraw.Draw(n,'RGBA'); r=random.Random(3)
for i in range(22):
    x,y=r.randint(0,400),r.randint(0,400); d.ellipse([x,y,x+16,y+9],fill=(210,96,26,28))
save(n,'nav-texture')
open(f'{OUT}/README_placeholders.txt','w').write('These images are simple PLACEHOLDERS generated so the site looks complete. Replace each with your own artwork, using the same filename (.webp), from Fantastic_Mr_Fox_Image_Prompt_Library.md. poster.webp / poster-download.jpg are the real poster.\n')
print(sorted(os.listdir(OUT)))
