import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const suggestions = [
  {
    id: '1',
    name: 'Thailand'
  }
];

const KeyCodes = {
  comma: 188,
  enter: 13
};

const App = () => {
  const [tags, setTags] = useState([
    {
      id: "1",
      name: 'Thailand'
    },
    {
      id: '2',
      name: 'India'
    }
  ]);

  const handleDelete = (i) => {
    const delItems = tags.filter((item, index) => index !== i);
    setTags(delItems);
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };
console.log(tags)
  const handleDrag = (tag) => {
    setTags([...tags, tag])
  }
  return (
    <div>
      <h1>React Tags Example</h1>
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          inputFieldPosition='top'
          autocomplete={true}
          editable
          
        />
      </div>
    </div>
  );
};

export default App;
