mkdir -p /tmp/data
for i in {1..30}
do
    base64 /dev/urandom | head -c 100000000 > /tmp/data/$i.txt
done