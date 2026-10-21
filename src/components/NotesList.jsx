import React from 'react';
import NoteItem from './NoteItem';

function formatGroupHeader(groupKey) {
  const [year, month] = groupKey.split('-');
  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleDateString('en-EN', { month: 'long', year: 'numeric' });
}

function groupNotesByMonth(notes) {
  return notes.reduce((groups, note) => {
    const date = new Date(note.createdAt);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(note);
    return groups;
  }, {});
}

function NotesList({ notes, onDelete, onArchive, dataTestId = 'notes-list', searchKeyword = '' }) {
  const hasNotes = notes && notes.length > 0;

  if (!hasNotes) {
    return (
      <div className="notes-list" data-testid={dataTestId}>
        <p
          className="notes-list__empty-message"
          data-testid={`${dataTestId}-empty`}
        >
          No Notes Found
        </p>
      </div>
    );
  }

  const groupedNotes = groupNotesByMonth(notes);

  return (
    <div className="notes-list" data-testid={dataTestId}>
      {Object.entries(groupedNotes).map(([groupKey, groupNotes]) => (
        <section
          key={groupKey}
          className="notes-group"
          data-testid={`${groupKey}-group`}
        >
          <div className="notes-group__header">
            <h3>{formatGroupHeader(groupKey)}</h3>
            <span data-testid={`${groupKey}-group-count`}>
              {groupNotes.length} notes
            </span>
          </div>
          {groupNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onArchive={onArchive}
              searchKeyword={searchKeyword}
            />
          ))}
        </section>
      ))}
    </div>
  );
}

export default NotesList;
