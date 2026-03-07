file_path = r"c:\Users\DELL\Desktop\landing-dev\src\App.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

lines.insert(4, "import technologyData from './assets/Technology.json';\n")
del lines[20:99]

with open(file_path, "w", encoding="utf-8") as f:
    f.writelines(lines)
print("App.tsx updated")
