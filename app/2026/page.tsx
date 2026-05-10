const ultratrackerUrl =
  'https://ultratracker.app/embed/86f9b690-6464-46ce-bc9f-feb417a19ec5?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ2aWV3ZXI6ODZmOWI2OTAtNjQ2NC00NmNlLWJjOWYtZmViNDE3YTE5ZWM1Iiwicm9sZSI6InZpZXdlciIsInJhY2VJZCI6Ijg2ZjliNjkwLTY0NjQtNDZjZS1iYzlmLWZlYjQxN2ExOWVjNSIsImp0aSI6IjE1MTJmNmQwLTBkYzMtNDg3MC04ODUyLTJiMGUzMzk4YWJlZSIsImlhdCI6MTc3ODQwMTIxMSwiZXhwIjoxNzgwOTkzMjExLCJhdWQiOiJ1bHRyYXRyYWNrZXIiLCJpc3MiOiJ1bHRyYXRyYWNrZXItYXBpIn0.sAmlyxTLs7aKuOSpUjh_Jd-mKuIQTWiHnpJRQg8Ez-c';

export default function Page2026() {
  return (
    <div className="fixed inset-0 z-50 bg-black">
      <iframe
        src={ultratrackerUrl}
        title="Ultratracker 2026"
        className="h-full w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
