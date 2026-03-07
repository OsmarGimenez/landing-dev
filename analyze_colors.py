import json

with open(r"c:\Users\DELL\Desktop\landing-dev\src\assets\Technology.json", "r", encoding="utf-8") as f:
    data = json.load(f)

colors = set()

def find_colors(obj):
    if isinstance(obj, dict):
        if "c" in obj and isinstance(obj["c"], dict) and "k" in obj["c"]:
            color = obj["c"]["k"]
            if isinstance(color, list) and len(color) == 4 and isinstance(color[0], (int, float)):
                colors.add(tuple(color))
        for v in obj.values():
            find_colors(v)
    elif isinstance(obj, list):
        for item in obj:
            find_colors(item)

find_colors(data)

with open(r"c:\Users\DELL\Desktop\landing-dev\colors.txt", "w", encoding="utf-8") as out:
    for c in colors:
        out.write(f"Color: [{c[0]:.3f}, {c[1]:.3f}, {c[2]:.3f}, {c[3]:.3f}] - RGB: {int(c[0]*255)}, {int(c[1]*255)}, {int(c[2]*255)}\n")
