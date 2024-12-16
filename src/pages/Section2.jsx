import React from 'react'
import ReactMarkdown from 'react-markdown'

function Section2(props) {
  return (
    <div>
      <section>
        <h2>Chef Claude Recommends: </h2><br />
        <ReactMarkdown>
        {props.recipe}
        </ReactMarkdown>
    
</section>
    </div>
  )
}

export default Section2
