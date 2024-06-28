import { jsPDF } from "jspdf";
import history from "../data/history.json";
import { TimelineData } from "src/components/core/timeline";

interface CursorPosition {
    x: number;
    y: number;
}

export function generatePDF(): void {
    const doc: jsPDF = new jsPDF();

    const position: CursorPosition = { x: 10, y: 20 };

    doc.setFontSize(20);
    doc.text("Dean Rutter", position.x, position.y);
    position.y += 4;
    doc.setFontSize(8);
    doc.setTextColor("#0000FF");
    doc.textWithLink("https://www.orbonis.co.uk/", position.x, position.y, { url: "https://www.orbonis.co.uk/" });
    doc.setTextColor("#000000");
    position.y += 5;

    doc.text("Belle Vale", position.x, position.y);
    position.y += 3;
    doc.text("Halesown", position.x, position.y);
    position.y += 3;
    doc.text("B63", position.x, position.y);
    position.y += 10;

    for (const entry of history) {
        addHistoryEntry(doc, position, entry);
    }

    doc.save("Dean Rutter - CV.pdf");
}

function addHistoryEntry(doc: jsPDF, position: CursorPosition, entry: TimelineData): void {
    const startY: number = position.y - 3;
    const maxWidth: number = 150;

    doc.setFontSize(11);
    doc.text(entry.name, position.x + 2, position.y);
    position.y += 5;
    doc.setFontSize(8);
    doc.text(entry.description, position.x + 2, position.y);
    position.y += 4;
    doc.text(`${entry.dates.start} - ${entry.dates.end ?? "Present"}`, position.x + 2, position.y);
    position.y += 6;
    if (entry.details) {
        if (typeof(entry.details) === "string") {
            const size = doc.getTextDimensions(entry.details, { maxWidth });
            doc.text(entry.details, position.x + 2, position.y, { maxWidth });
            position.y += size.h;
        } else {
            for (const line of entry.details) {
                const size = doc.getTextDimensions(line, { maxWidth });
                doc.text(line, position.x + 2, position.y, { maxWidth });
                position.y += size.h + 2;
            }
        }
    }

    doc.line(position.x, startY, position.x, position.y - 1);

    position.y += 5;
}