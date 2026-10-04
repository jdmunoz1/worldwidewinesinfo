"""Shared emitters for data generators."""
import json, os

def out_dir():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    d = os.path.join(root, "src", "data")
    os.makedirs(d, exist_ok=True)
    return d

J = json.dumps
def A(xs):
    return "[" + ", ".join(J(x) for x in xs) + "]"

def emit_list(entries, var_name, type_name, key_order):
    lines = [f'import type {{ {type_name} }} from "@/types";', ""]
    lines.append(f"export const {var_name}: {type_name}[] = [")
    for e in entries:
        lines.append("  {")
        for k in key_order:
            if k not in e:
                continue
            v = e[k]
            if isinstance(v, list):
                lines.append(f"    {k}: {A(v)},")
            else:
                lines.append(f"    {k}: {J(v)},")
        lines.append("  },")
    lines.append("];")
    return "\n".join(lines)

def write_ts(fn, content):
    with open(os.path.join(out_dir(), fn), "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  {len(content):,}b -> {fn}")
