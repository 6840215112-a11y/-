body {
    margin: 0;
    font-family: sans-serif;
    background: #f5f5f5;
}

header {
    background: #2e7d32;
    color: white;
    text-align: center;
    padding: 20px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
}

.card {
    background: white;
    width: 250px;
    margin: 15px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: 0.3s;
}

.card:hover {
    transform: scale(1.05);
}

.card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.card h2 {
    margin: 10px;
}

.card p {
    margin: 10px;
    color: #555;
}

footer {
    text-align: center;
    padding: 10px;
    background: #2e7d32;
    color: white;
