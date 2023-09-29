const newFormHandler = async (event) => {
    event.preventDefault();
    console.log('testing!')

    const content = document.querySelector('#project-comment').value.trim();
    console.log(content)

    if (content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({content}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(JSON.stringify({content}))

      if (response.ok) {
        // document.location.replace('/project/');
        console.log(response)
      } else {
        alert('Failed to create comment');
      }
    }
  };

//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');

//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };

  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);

//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);
