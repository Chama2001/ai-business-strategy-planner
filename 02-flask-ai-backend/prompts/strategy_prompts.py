def get_business_strategy_prompt(business_idea, target_audience, budget):
    """
    Generates a highly structured prompt to create a full digital business strategy.
    """
    base_prompt = f"""
    You are an elite Business Strategist and Financial Consultant.
    I have a startup idea and I need a comprehensive digital business strategy to execute it successfully.
    
    Business Idea: '{business_idea}'
    Target Audience: '{target_audience}'
    Initial Budget: '{budget}'
    
    Please provide a structured, actionable plan with the following sections:
    1. EXECUTIVE SUMMARY: A brief, powerful pitch of the business model.
    2. DIGITAL MARKETING PIPELINE: Step-by-step strategy to acquire the first 100 customers.
    3. REVENUE & FINANCIAL MODEL: How to monetize this idea (pricing strategy and expected ROI timeline).
    4. TECH STACK RECOMMENDATION: Tools and platforms needed to launch efficiently.
    
    Format the output using clear headings, bullet points, and a highly professional yet encouraging tone.
    """
    return base_prompt
