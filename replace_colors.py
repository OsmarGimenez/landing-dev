import json

file_path = r"c:\Users\DELL\Desktop\landing-dev\src\assets\Technology.json"
with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

# brand-primary: #3B82F6
brand_primary = [59/255.0, 130/255.0, 246/255.0, 1]

def replace_colors(obj):
    if isinstance(obj, dict):
        if "c" in obj and isinstance(obj["c"], dict) and "k" in obj["c"]:
            color = obj["c"]["k"]
            if isinstance(color, list) and len(color) == 4 and isinstance(color[0], (int, float)):
                # If it's the bluish fill or outline
                if (0.33 < color[0] < 0.34 and 0.40 < color[1] < 0.41 and 0.43 < color[2] < 0.45) or \
                   (0.23 < color[0] < 0.24 and 0.27 < color[1] < 0.28 and 0.29 < color[2] < 0.30):
                    obj["c"]["k"] = brand_primary
        for v in obj.values():
            replace_colors(v)
    elif isinstance(obj, list):
        for item in obj:
            replace_colors(item)

replace_colors(data)

with open(file_path, "w", encoding="utf-8") as f:
    json.dump(data, f)

print("Colors updated successfully")
