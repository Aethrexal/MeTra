if [ -z "$1" ]; then
    echo "Error: Argument is empty"
    exit 1
fi


docker build -t metrea:"$1" .
