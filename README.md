# Fedena Marks Helper (Chrome + Firefox extension)

Fills Fedena **Gradebook** marks (e.g. HW, Oral, Cw, Attnd) from a JSON file. It never submits on its own.

## Install
- **Chrome:** `chrome://extensions` → Developer mode → **Load unpacked** → this folder.
- **Firefox:** `about:addons` → ⚙️ → **Install Add-on From File** → the `.xpi`, then allow **fedena.com** under Permissions.

## Use
1. Fedena → **Gradebook → Manage Gradebook → (grade) → Manage Exams → (exam) → Enter marks** for a subject and batch.
2. The **🧮 Marks Helper** panel shows the students and mark columns with their maximum.
3. **📋 Copy marks template** gives the JSON to fill (or export it from gmis-platform):
   ```json
   { "batch": "Grade 05 - Green (2026-2027)", "exam": "1st Term Marks (TM1)",
     "students": [ { "name": "…", "admission_no": "S1501",
                     "marks": { "HW": 8.5, "Oral": 7, "Cw": 9, "Attnd": 10 } } ] }
   ```
4. **📥 Paste & Fill Marks** fills each box, matched by admission number.
   Marks above the maximum are refused (red); locked (already submitted) marks are skipped.
5. Check, then click Fedena's **Submit Marks** yourself.
