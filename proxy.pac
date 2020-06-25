function FindProxyForURL(url, host) {
	// Only proxy URLS that match the patterns
	if ({PATTERNS})
	{
		return "PROXY {LOCAL_IP}:9090; DIRECT";
	}
	// All other requests go directly
	return "DIRECT";
}