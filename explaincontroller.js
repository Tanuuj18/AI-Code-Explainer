const { getExplanation } = require('../services/llmService');

const explainCode = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({
        success: false,
        message: 'Code is required'
      });
    }

    const explanation = await getExplanation(code);

    res.status(200).json({
      success: true,
      explanation
    });

  } catch (error) {
    console.error('Explain error:', error.message);

    res.status(500).json({
      success: false,
      message: 'Failed to explain code'
    });
  }
};

module.exports = { explainCode };
