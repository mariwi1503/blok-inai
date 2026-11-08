import { LETTERHEAD } from "@/data/letters";
import { cn } from "@/lib/cn";
import type { LetterTemplate } from "@/types";

type LetterDocumentProps = {
  template: LetterTemplate;
};

/** On-screen preview of a letter template, styled like a printed sheet. */
export function LetterDocument({ template }: LetterDocumentProps) {
  const singleSignature = template.signatures.length === 1;

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm leading-relaxed text-slate-800 font-serif">
      <div className="text-center border-b-2 border-slate-800 pb-3 mb-5">
        <h3 className="font-bold text-base sm:text-lg tracking-wide uppercase">{LETTERHEAD.line1}</h3>
        <h4 className="font-bold text-sm tracking-wide uppercase">{LETTERHEAD.line2}</h4>
        <p className="text-[11px] text-slate-600 italic">
          {LETTERHEAD.address}
          {template.letterheadPhone ? ` | ${template.letterheadPhone}` : ""}
        </p>
      </div>

      <div className="text-center my-4">
        <h4 className="font-bold text-sm uppercase underline">{template.heading}</h4>
        <p className="text-xs">{template.number}</p>
      </div>

      <p className="text-xs mb-3">{template.intro}</p>

      <table className="w-full text-xs mb-4">
        <tbody>
          {template.fields.map((field) => (
            <tr key={field.label}>
              <td className="w-36 py-1 align-top">{field.label}</td>
              <td className="py-1">: {field.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-xs mb-6">{template.closing}</p>

      <div className={cn("flex text-xs text-center pt-4", singleSignature ? "justify-end" : "justify-between")}>
        {template.signatures.map((signature) => (
          <div key={signature.title} className={singleSignature ? "w-56" : "w-48"}>
            <p className="mb-14">{signature.title}</p>
            <p className="font-bold underline">( {signature.name} )</p>
          </div>
        ))}
      </div>
    </div>
  );
}
