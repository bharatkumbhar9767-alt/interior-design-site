import sys
from PIL import Image
def process_sketch(filepath):
    img = Image.open(filepath).convert('RGBA')
    data = img.getdata()
    new_data = []
    stroke_r, stroke_g, stroke_b = 60, 50, 40
    for item in data:
        gray = int(item[0] * 0.299 + item[1] * 0.587 + item[2] * 0.114)
        if gray > 240:
            alpha = 0
        else:
            alpha = int(255 - (gray * (255/240)))
        new_data.append((stroke_r, stroke_g, stroke_b, alpha))
    img.putdata(new_data)
    img.save(filepath)
    print(f'Processed {filepath}')

for f in ['card_circulation.png', 'card_proportion.png', 'card_light.png']:
    process_sketch(f)
