import React, { useMemo } from 'react';
import { Search, Book, GraduationCap, FileText, ArrowRight } from 'lucide-react';
import { CAPS_GRADES, CAPS_SUBJECTS, TEXTBOOKS } from '../constants';

export default function SearchResults() {
  const query = new URLSearchParams(window.location.search).get('q') || '';
  const searchTerm = query.toLowerCase();

  const results = useMemo(() => {
    if (!searchTerm) return { grades: [], subjects: [], textbooks: [] };

    const filteredGrades = CAPS_GRADES.filter(g => 
      g.name.toLowerCase().includes(searchTerm) || 
      g.phase.toLowerCase().includes(searchTerm)
    );

    const filteredSubjects = CAPS_SUBJECTS.filter(s => 
      s.name.toLowerCase().includes(searchTerm)
    );

    const filteredTextbooks = TEXTBOOKS.filter(t => 
      t.title.toLowerCase().includes(searchTerm) || 
      t.isbn.includes(searchTerm)
    );

    return {
      grades: filteredGrades,
      subjects: filteredSubjects,
      textbooks: filteredTextbooks
    };
  }, [searchTerm]);

  const totalResults = results.grades.length + results.subjects.length + results.textbooks.length;

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-display uppercase mb-4">Search Results</h1>
          <p className="text-xl font-bold text-slate-500">
            {totalResults} results found for "<span className="text-black">{query}</span>"
          </p>
        </div>

        {totalResults === 0 ? (
          <div className="brutal-card p-12 text-center bg-slate-50">
            <Search className="w-16 h-16 mx-auto mb-6 text-slate-300" />
            <h2 className="text-3xl font-display mb-4">No results found</h2>
            <p className="text-xl font-bold text-slate-500">Try searching for a grade (e.g., "Grade 12"), a subject, or an ISBN.</p>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Grades */}
            {results.grades.length > 0 && (
              <section>
                <h2 className="text-3xl font-display uppercase mb-8 flex items-center">
                  <GraduationCap className="w-8 h-8 mr-4 text-brand" />
                  Grades
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {results.grades.map(grade => (
                    <a 
                      key={grade.id} 
                      href={`/curriculum/caps?grade=${grade.id}`}
                      className="brutal-card p-6 bg-white hover:bg-brand transition-colors group"
                    >
                      <div className="text-2xl font-display mb-2">{grade.name}</div>
                      <div className="text-sm font-bold text-slate-500 uppercase">{grade.phase} Phase</div>
                      <ArrowRight className="w-6 h-6 mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* Subjects */}
            {results.subjects.length > 0 && (
              <section>
                <h2 className="text-3xl font-display uppercase mb-8 flex items-center">
                  <Book className="w-8 h-8 mr-4 text-accent" />
                  Subjects & Disciplines
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {results.subjects.map(subject => (
                    <a 
                      key={subject.id} 
                      href={`/course/${subject.id}`}
                      className="brutal-card p-6 bg-white hover:bg-accent hover:text-white transition-colors group"
                    >
                      <div className="text-2xl font-display mb-2">{subject.name}</div>
                      <div className="text-sm font-bold opacity-60 uppercase">
                        Available for {subject.grades.length} grades
                      </div>
                      <ArrowRight className="w-6 h-6 mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* Textbooks */}
            {results.textbooks.length > 0 && (
              <section>
                <h2 className="text-3xl font-display uppercase mb-8 flex items-center">
                  <FileText className="w-8 h-8 mr-4 text-brand" />
                  Textbooks & Modules
                </h2>
                <div className="space-y-4">
                  {results.textbooks.map(tb => (
                    <div key={tb.id} className="brutal-card p-6 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="text-2xl font-display mb-1">{tb.title}</div>
                        <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-500 uppercase">
                          <span>ISBN: {tb.isbn}</span>
                          <span>•</span>
                          <span>Grade {tb.grade.split('-')[1]}</span>
                        </div>
                      </div>
                      <button className="brutal-btn !py-2 !px-6 text-sm">View Module</button>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
