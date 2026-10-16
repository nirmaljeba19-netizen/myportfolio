const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const nvapiKey = process.env.NVAPI_KEY;
const nvapiModel = process.env.NVAPI_MODEL || 'meta/llama-3.1-70b-instruct';
const nvapiUrl = 'https://integrate.api.nvidia.com/v1/chat/completions';

app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname)));

const portfolioContext = `You are an AI assistant for Nirmal's portfolio website. You help visitors understand his profile, skills, education, projects, certificates, experience, and contact details. Keep answers clear, friendly, and concise.\n\nProfile:\n- Name: Nirmal R\n- Student: Computer Science and Design at SNS College of Technology, Coimbatore\n- Focus: Code, design, creative technology, UI/UX, problem-solving\n- Skills: C, C++, Python, Java, Leadership, Teamwork, Graphic Design, Design Thinking, UI/UX, social media marketing, problem-solving, presentation\n- Education: B.E. Computer Science & Design, Higher Secondary (+2)\n- Experience: Internship in graphic design and social media marketing, hackathons, design-driven projects\n- Projects: Smart Resume Platform and interactive UI projects\n- Contact: nirmaljeba19@gmail.com | +91 6382558611 | GitHub: nirmaljeba19-netizen | LinkedIn: nirmal-r-\n\nBe helpful, professional, and naturally conversational.`;

app.post('/api/chat', async (req, res) => {
  const message = (req.body && req.body.message) ? String(req.body.message).trim() : '';

  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  if (!nvapiKey) {
    return res.status(500).json({ error: 'NVAPI key is not configured.' });
  }

  try {
    const response = await fetch(nvapiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${nvapiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: nvapiModel,
        messages: [
          { role: 'system', content: portfolioContext },
          { role: 'user', content: message }
        ],
        temperature: 0.5,
        max_tokens: 220
      })
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data?.error?.message || 'AI request failed.';
      return res.status(response.status).json({ error: errorMessage });
    }

    const reply = data?.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return res.status(500).json({ error: 'No valid AI response returned.' });
    }

    return res.json({ reply });
  } catch (error) {
    console.error('NVAPI error:', error);
    return res.status(500).json({ error: 'Something went wrong while contacting the AI service.' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Portfolio AI server running at http://localhost:${port}`);
});
